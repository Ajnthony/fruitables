import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${match.params.id}`);
      setProduct(res.data);
    };

    fetchProduct();
  }, [match.params.id]);

  return (
    <>
      <Link to='/' className='btn btn-dark my-3'>
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                <strong>{product.name}</strong>
              </h2>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </ListGroup.Item>

          <ListGroup.Item>
            <p>{product.description}</p>
          </ListGroup.Item>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>$ {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
