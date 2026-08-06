import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6';

const InstituicaoEnsino = () => {


  const URL_BASE = 'http://localhost:5000';



  const [instituicoesEnsino, setInstituicoesEnsino] = useState([]);



  const [showModal, setShowModal] = useState(false);


  

  const [formData, setFormData] = useState({
    no_entidade: '',
    co_entidade: '',
    no_uf: '',
    sg_uf: '',
    co_uf: '',
    no_municipio: '',
    co_municipio: '',
    nu_ano_censo: '',
    qt_mat_bas: '',
    qt_mat_inf: '',
    qt_mat_fund: '',
    qt_mat_med: '',
    qt_mat_prof: '',
    qt_mat_eja: '',
    qt_mat_esp: ''
  });



// useEffect vai fazer automaticamento GET dos dados la na api fake

  useEffect(() => {
    fetch(`${URL_BASE}/instituicaes`)
      .then((response) => response.json())
      .then((data) => {
        setInstituicoesEnsino(data); 
      })
      .catch((error) => console.log("Erro ao buscar API", error));
  }, []);

 


  const handleShowAdd = () => {
    setFormData({
      no_entidade: '', co_entidade: '', no_uf: '', sg_uf: '', co_uf: '',
      no_municipio: '', co_municipio: '', nu_ano_censo: '', qt_mat_bas: '',
      qt_mat_inf: '', qt_mat_fund: '', qt_mat_med: '', qt_mat_prof: '',
      qt_mat_eja: '', qt_mat_esp: ''
    });
    setShowModal(true);
  };

 


  const handleClose = () => {
    setShowModal(false);
  };

  





    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };






  //Essa função vai ser acionada quando o usuário preencher todos os campos lá 
  // do modal quando ele colocar todos os campos do modal vai acionar 
  // essa função para fazer um post, ou seja, vai salvar as informações lá na API fake (json server)

const handleSalvar = () => {
   
    const requisicaoHTTP = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };




    
    fetch(`${URL_BASE}/instituicaes`, requisicaoHTTP)
      .then((response) => response.json())
      .then((dadoSalvo) => {
        
        setInstituicoesEnsino([...instituicoesEnsino, dadoSalvo]);
       
        handleClose();
      })
      .catch((error) => console.log("Erro ao salvar", error));
  };



  

  return (



    <Container className="pt-4">
     
      <Row className="mb-3">
        <Col xs="10" lg="10">
          <Form.Control type="text" placeholder="Busca" />
        </Col>
        <Col xs="2" lg="2" className="d-flex gap-2">
          <Button onClick={handleShowAdd} variant="primary">
            <FaPlus /> 
          </Button>
        </Col>
      </Row>

     





      <Table>
        <thead>
          <tr>
            <th>Código Entidade</th>
            <th>Nome Entidade</th>
            <th>UF</th>
            <th>Município</th>
            <th>codigo do municipio</th>
             <th>numero do ano censo</th>
              <th>quantidadee  basica</th>
              <th>quantidadee  infantil</th>
               <th>quantidadee  fundamental</th>
               <th>quantidadee  medio</th>
                <th>quantidadee  prfessores</th>
               <th>quantidadee  Eja</th>
               <th>quantidadee  especial</th>
          </tr>
        </thead>
        <tbody>



          {instituicoesEnsino.map((item, i) => (
            <tr key={item.co_entidade || i}>
              <td>{item.co_entidade}</td>
              <td>{item.no_entidade}</td>
              <td>{item.sg_uf}</td>
              <td>{item.no_municipio}</td>
               <td>{item.co_municipio}</td>
               <td>{item.nu_ano_censo}</td>
                <td>{item.qt_mat_bas}</td>
                <td>{item.qt_mat_inf}</td>
                <td>{item.qt_mat_fund}</td>
                 <td>{item.qt_mat_med}</td>
                 <td>{item.qt_mat_prof}</td>
                 <td>{item.qt_mat_eja}</td>
                 <td>{item.qt_mat_esp}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    





      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Instituição</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome da Entidade (no_entidade)</Form.Label>
                  <Form.Control type="text" name="no_entidade" value={formData.no_entidade} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Código Entidade (co_entidade)</Form.Label>
                  <Form.Control type="number" name="co_entidade" value={formData.co_entidade} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Sigla UF (sg_uf)</Form.Label>
                  <Form.Control type="text" name="sg_uf" value={formData.sg_uf} onChange={handleChange} placeholder="Ex: PB" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome UF (no_uf)</Form.Label>
                  <Form.Control type="text" name="no_uf" value={formData.no_uf} onChange={handleChange} placeholder="Ex: Paraíba" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Código UF (co_uf)</Form.Label>
                  <Form.Control type="number" name="co_uf" value={formData.co_uf} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Município (no_municipio)</Form.Label>
                  <Form.Control type="text" name="no_municipio" value={formData.no_municipio} onChange={handleChange} placeholder="Ex: João Pessoa" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Cód. Município (co_municipio)</Form.Label>
                  <Form.Control type="number" name="co_municipio" value={formData.co_municipio} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Ano Censo (nu_ano_censo)</Form.Label>
                  <Form.Control type="number" name="nu_ano_censo" value={formData.nu_ano_censo} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
         







            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Básica (qt_mat_bas)</Form.Label>
                  <Form.Control type="number" name="qt_mat_bas" value={formData.qt_mat_bas} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>quantidad infantial (qt_mat_inf)</Form.Label>
                  <Form.Control type="number" name="qt_mat_inf" value={formData.qt_mat_inf} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label> quantidade Fundamental (qt_mat_fund)</Form.Label>
                  <Form.Control type="number" name="qt_mat_fund" value={formData.qt_mat_fund} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Quantidade de matrícula media (qt_mat_med)</Form.Label>
                  <Form.Control type="number" name="qt_mat_med" value={formData.qt_mat_med} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Quantidade de matrícula profesores (qt_mat_prof)</Form.Label>
                  <Form.Control type="number" name="qt_mat_prof" value={formData.qt_mat_prof} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Quantidade de matrícula jovem adulto (qt_mat_eja)</Form.Label>
                  <Form.Control type="number" name="qt_mat_eja" value={formData.qt_mat_eja} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Especial (qt_mat_esp)</Form.Label>
                  <Form.Control type="number" name="qt_mat_esp" value={formData.qt_mat_esp} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
         
          <Button variant="primary" onClick={handleSalvar}>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </Container>








  );
};

export default InstituicaoEnsino;