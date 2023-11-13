import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ImageWithText.css';
import backGroundImage from "../../assets/images/TransporteLogístico.webp";

const ImageWithText = ({ title, text }) => {
  return (
    <>
      <div className="image-background">
        <img src={backGroundImage} alt="Tu Imagen" className="background-image" />
        <div className="background-gradient"></div>

        <Container className="first-container"> {/* Agrega una clase al primer Container */}
          <Row>
            <Col className='text-center'>
              <h1>Transporte Pedro</h1>
              <p>"El transporte que necesitas, al alcance de tus manos"</p>
            </Col>
          </Row>
        </Container>

        <div className='container-wrapper'>
          <Container >
            <Row >
              <Col className="p-5">
                <h2 >Sobre nosotros</h2>
                <p >Si hablamos de transporte, no podemos dejar de mencionar a Martin y su empresa de transportes. Con una amplia flota de . vehículos, Martin se ha convertido en una figura clave en el mundo de los traslados. Su compromiso con el servicio y la satisfacción del cliente es lo que hace que su empresa sea diferente a las demás.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ImageWithText;
