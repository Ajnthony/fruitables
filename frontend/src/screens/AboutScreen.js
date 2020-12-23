import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import frugi from './frugi.jpg';

const AboutScreen = () => {
  return (
    <>
      <h1>About us</h1>
      <Row className='my-5'>
        <Col md={{ span: 3, offset: 1 }}>
          <h4>We have this.</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, illo!
          </p>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <h4>We have that.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            eligendi!
          </p>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <h4>We have those.</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            quia.
          </p>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Image src={frugi} alt='fruits and vegetables' />
      </Row>

      <Row className='my-5'>
        <Col md={{ span: 3, offset: 1 }}>
          <h4>We offer this.</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, illo!
          </p>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <h4>We offer that.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            eligendi!
          </p>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <h4>We offer those.</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            quia.
          </p>
        </Col>
      </Row>

      <Row className='my-5'>
        <h1>Certificates</h1>
      </Row>

      <Row className='my-5'>
        <Col md={{ span: 2, offset: 1 }}>
          <h5>#1 imaginary online vegan grocery store</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, beatae!
            Unde, recusandae quis sequi nesciunt nam quos esse natus adipisci.
          </p>
        </Col>
        <Col md={{ span: 2, offset: 1 }}>
          <h5>#1 fake cleanliness award</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, ex at corrupti sit libero saepe.
          </p>
        </Col>
        <Col md={{ span: 2, offset: 1 }}>
          <h5>Best customer experience (We wish)</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            libero sequi dolor est quasi molestiae corrupti?
          </p>
        </Col>
        <Col md={{ span: 2, offset: 1 }}>
          <i className='fas fa-star' style={{ color: '#f8e825' }}></i>
          <i className='fas fa-star' style={{ color: '#f8e825' }}></i>
          <i className='fas fa-star' style={{ color: '#f8e825' }}></i>
          <i className='fas fa-star' style={{ color: '#f8e825' }}></i>
          <i className='fas fa-star' style={{ color: '#f8e825' }}></i>
          <h5>M guide star winner</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex!
          </p>
        </Col>
      </Row>
    </>
  );
};

export default AboutScreen;
