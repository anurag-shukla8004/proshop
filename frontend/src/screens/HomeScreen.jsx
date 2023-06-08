import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { useGetProductQuery } from '../slices/productsApiSlice.js';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error?.error}
        </Message>
      ) : (
        <>
          {' '}
          <h1>Latest Products</h1>
          <Row>
            {products?.map((product) => (
              <Col key={products._id} sm={12} mg={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
