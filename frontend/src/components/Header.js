import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Fruitables</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/profile'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign in
                </Nav.Link>
              </LinkContainer>

              <NavDropdown title='More...' id='basic-nav-dropdown'>
                <LinkContainer to='/about'>
                  <NavDropdown.Item href='/about'>About</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/missions'>
                  <NavDropdown.Item href='/missions'>
                    Our missions
                  </NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />

                <LinkContainer to='/contact'>
                  <NavDropdown.Item href='/contact'>
                    Contact us
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
