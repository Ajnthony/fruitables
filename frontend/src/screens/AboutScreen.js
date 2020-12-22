import React, { useState } from 'react';
import { Alert, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AboutScreen = () => {
  const aboutInfos = [
    { id: 1, content: '...the website', active: false },
    { id: 2, content: '...the products', active: false },
    { id: 3, content: '...the creator', active: false },
  ];

  const [active, setActive] = useState(false);

  const activeHandler = e => {
    e.preventDefault();
    setActive(true);
  };

  return (
    <>
      <h1>You are on About page.</h1>
      <Row>
        <Col md={4}>
          <h2>About...</h2>
          {aboutInfos.map(info => (
            <Alert
              key={info.id}
              onClick={e => activeHandler(e)}
              variant={!info.active ? 'info' : 'success'}
            >
              {info.content}
            </Alert>
          ))}
        </Col>

        <Col md={8}>
          <h2>Content area</h2>
        </Col>
      </Row>
    </>
  );
};

export default AboutScreen;
