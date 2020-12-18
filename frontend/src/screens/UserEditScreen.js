import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetail } from '../actions/userActions';

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetail = useSelector(state => state.userDetail);
  const { loading, error, user } = userDetail;

  useEffect(() => {}, []);

  const submitHandler = e => {
    e.preventDefault();
    setMessage(null);

    if (!firstName || !lastName || !password || !confirmPassword) {
      setMessage('All fields are required');
    } else if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(firstName, lastName, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='firstName'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter your first name'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='lastName'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter your last name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email address'
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Update
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default UserEditScreen;
