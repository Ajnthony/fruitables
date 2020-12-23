import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const MissionsScreen = () => {
  return (
    <FormContainer>
      <Row className='text-center'>
        <Col>
          <h1>OUR MISSIONS</h1>
          <p>
            Fruitables' top priority is customer satisfaction, followed by the
            quality of products.
          </p>
          <hr />
          <h5>Customer experience</h5>
          <p>
            We guarantee that no customers will ever be dissatisfied,
            discouraged or uncomfortable while shopping with us.
          </p>
          <br />
          <h5>Quality</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            repellendus ab dolore fuga veniam ea, architecto eveniet officiis
            quibusdam ipsum!
          </p>
          <br />
          <h5>Integrity</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            unde explicabo eos.
          </p>
          <br />
          <h5>Honesty</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, velit
            recusandae ullam libero numquam ex est.
          </p>
          <br />
          <h5>Respect</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus laudantium maiores sint ad dolore deserunt qui ipsum
            nemo, voluptates vero?
          </p>
          <br />
          <h5>Teamwork</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab impedit
            totam laborum, atque omnis laboriosam officia est cupiditate.
          </p>
          <br />
          <h5>Responsibility</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            sint quae possimus ipsum expedita quis laboriosam ratione?
          </p>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default MissionsScreen;
