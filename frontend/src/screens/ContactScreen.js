import React, { useState } from 'react';
import { Form, Image, Row, Col, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import contactus from './contactus.jpg';

const ContactScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [species, setSpecies] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = e => {
    e.preventDefault();
    setMessage(null);

    if (!firstName || !lastName || !email || !jobTitle || !phoneNumber) {
      setMessage('*: required field');
    } else {
      setMessage(
        "Thank you for showing your interest in us! Actually, this is just a pop up message and nothing has been submitted; so you don't have to be concerned!"
      );
      setFirstName('');
      setLastName('');
      setEmail('');
      setJobTitle('');
      setPhoneNumber('');
      setSpecies('');
    }
  };

  return (
    <>
      <FormContainer>
        <Image src={contactus} alt='contactus' className='my-5' rounded fluid />
      </FormContainer>

      <Row>
        <Col md={7} className='mb-3'>
          <h1>Fruits, veggies, and people.</h1>
          <p>
            Obviously we love fruits and veggies, but that doesn't mean we love
            plants only. We do love animals too, but since the users, like you,
            can't communicate with other species than humans, we have decided to
            work with other human being to help you whenever you are in need.
          </p>
          <h2>Talk to us. You have questions? We have answers.</h2>
          <p>
            Questions about our products, or something else? Just ask us. Once a
            famous poet said:
          </p>
          <p>
            <em>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
              id pariatur veniam dolores illum? Ullam voluptatum similique eos
              earum tempora eveniet dolor soluta ducimus laborum dolores quo
              illum nemo nobis numquam enim quaerat, impedit reiciendis! Sit
              optio nemo hic voluptate iure animi delectus, nostrum, sequi
              ullam, error iusto blanditiis ad."
            </em>
          </p>
          <p>
            <em>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              vel cupiditate nostrum libero sapiente sunt, ipsum eos rem sequi
              similique dolores itaque ut sed! Sapiente vero temporibus et,
              pariatur sit, atque fugiat voluptatem tenetur corrupti doloribus
              aut, soluta ex laboriosam"
            </em>
            , which is supported by the following:
          </p>
          <p>
            <em>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam accusantium magni at doloribus ipsa, quibusdam quod
              asperiores. Quasi beatae ullam porro at modi, perspiciatis sed
              cumque obcaecati. Tempore adipisci minus similique?"
            </em>
          </p>
          <p>
            ...so, er...you get the idea of how open I am to you, right? As the
            creator of this website, I can even give you my secret detail, such
            as &#123;** **&#125;, which is &#123;** available for paid members
            only **&#125;
          </p>
        </Col>

        <Col md={{ span: 4, offset: 1 }} className='my-3'>
          <h2>Office address</h2>
          <p>1000 Somewhere St. Random City, CA 00000</p>

          <h2>Direct contact</h2>
          <p>Phone: 000.000.0000</p>
          <p>Toll free: 000.000.0001</p>
          <p>Email: dontreply@fruitables.com</p>

          <h2>Departments</h2>
          <p>csr@fruitables.com</p>
          <p>it@fruitables.com</p>
          <p>sales@fruitables.com</p>
          <p>hr@fruitables.com</p>
          <p>careers@fruitables.com</p>
        </Col>
      </Row>

      <Row className='justify-content-center my-3'>
        <Col md={6} className={message === null ? 'border-top py-3' : ''}>
          {message && (
            <Message variant={message.startsWith('*') ? 'danger' : 'success'}>
              {message}
            </Message>
          )}
        </Col>
      </Row>

      <Form onSubmit={submitHandler}>
        <Row className='justify-content-center'>
          <Col md={4}>
            <Form.Group controlId='firstName'>
              <Form.Label>First name *</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter your first name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='lastName'>
              <Form.Label>Last name *</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter your last name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email address *</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email address'
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId='jobTitle'>
              <Form.Label>Job title *</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your job title'
                value={jobTitle}
                onChange={e => setJobTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='phoneNumber'>
              <Form.Label>Phone number *</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your phone number'
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='species'>
              <Form.Label>Species</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your species'
                value={species}
                onChange={e => setSpecies(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col md={4}>
            <Button
              type='submit'
              variant='primary'
              className='btn btn-block my-3'
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ContactScreen;
