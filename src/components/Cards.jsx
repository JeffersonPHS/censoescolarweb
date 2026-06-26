import Card from 'react-bootstrap/Card';
import dados from '../datasets/resultado_pb.json'
import './Cards.css'
import { Container } from 'react-bootstrap';

function Cards() {

//Se eu tirar essa parte do sort vai funcionar do mesmo jeito porque meu resultado_pb.json já está ordenado
dados.sort((primeiro, segundo) => segundo.qt_mat_bas - primeiro.qt_mat_bas)

  return (

   <Container className="ContainerCards">

     {dados.slice(0,3).map((item) => (

       <Card className='Cards'>

      <Card.Body>

        <Card.Title>Nome do municipio: {item.no_municipio}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Codigo da instituiçao: {item.co_entidade}</Card.Subtitle>

        <Card.Subtitle className="mb-2 text-muted">Quantidade da materia: {item.qt_mat_bas}</Card.Subtitle>
         <Card.Subtitle className="mb-2 text-muted">Codigo da UF: {item.co_uf}</Card.Subtitle>
         

      </Card.Body>


      

    </Card>




    

        )) }
   </Container>


    
  )
  
}

export default Cards
