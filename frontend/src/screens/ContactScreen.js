import React, { useState } from 'react';
import { FormContainer, Form, Image, Row, Col } from 'react-bootstrap';
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
        'Thank you for showing your interest in us! Actually, this is just a pop up message and nothing has been submitted.'
      );
    }
  };

  return (
    <>
      <Image src={contactus} alt='contactus' rounded fluid />
      <Row>
        <Col md={9}>
          <h1>Fruits, veggies, and people.</h1>
          <p>
            Obviously we love fruits and veggies, but that doesn't mean we love
            plants only. We do love animals too, but since the users, like you,
            can't communicate with other species than humans, we have decided to
            work with other human being to help you whenever you are in need.
          </p>
          <h2>Talk to us. You have questions? We have answers.</h2>
          <p>
            Questions about quality? How our products are produced, treated and
            delivered? Or about whole food plant based diet? Just ask us.
          </p>
          <p>
            As the creator of this website, I can even give you my secret
            detail, which is &#123;available for paid members only&#125;
          </p>
        </Col>
        <Col md={3}>
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

      <Row>
        {message && <Message variant='danger'>{message}</Message>}
        <FormContainer>
          <Col md={6}>
            <Form onSubmit={submitHandler}>
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
            </Form>
          </Col>

          <Col md={6}>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='jobTitle'>
                <Form.Label>Job title *</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your job title'
                  value={jobTitle}
                  onChange={e => setjobTitle(e.target.value)}
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
            </Form>
          </Col>
        </FormContainer>
      </Row>
    </>
  );
};

export default ContactScreen;
