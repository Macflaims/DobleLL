import React from 'react';
import "./ThreeStripesSection.css"
import { Container, Col, Row } from 'react-bootstrap';
const ThreeStripesSection = () => {
  return (
    <>
    <Container fluid>
      <Row className='three-stripes-section'>
        <Col className="text-center stripe" sm={{ order: 'last' }}><h2>Somos especialistas</h2>
        <p>Tenemos todas las herramientas necesarias para garantizar la llegada a destino de la carga en buen estado.</p></Col>
        <Col className="text-center stripe" sm><h2>Responsabilidad</h2>
        <p>Entregamos todos los bienes en las mismas condiciones en que los recibimos.</p></Col>
        <Col className="text-center stripe" sm={{ order: 'first' }}><h2>Experiencia</h2>
        <p>Llevamos 21 años realizando mudanzas desde y hacia Mar del Plata.</p></Col>
      </Row>
    </Container>
    </>
  );
};

export default ThreeStripesSection;
