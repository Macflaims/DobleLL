import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CardSectionComponent({ data }) {
  return (
    <Container className="card-list pt-5 xxl">
      <Row xs={1} md={2}>
        {data.map((item, index) => (
          <Col key={index} lg="3" md="auto" className='p-1'>
            <Card>
              <Card.Img variant="top" src={item.imageSrc} />
              <Card.Body className='text-center'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardSectionComponent;
