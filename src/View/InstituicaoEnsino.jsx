import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import dados from '../datasets/resultado_pb.json'

const InstituicaoEnsino = () => {




  return (


    dados.map((item) => 
     <Table>
      <thead>
        <tr>
          <th>Codigo Entidade</th>
          <th>Numero UF</th>
          <th>Sigla UF</th>
          <th>Codigo UF</th>
          <th>Numero Municipio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{item.co_entidade}</th>
          <th>{item.no_uf}</th>
          <th>{item.sg_uf}</th>
          <th>{item.co_uf}</th>
          <th>{item.no_municipio}</th>
        </tr>
    
      </tbody>
    </Table>
  )
  
  )
   
};

export default InstituicaoEnsino;