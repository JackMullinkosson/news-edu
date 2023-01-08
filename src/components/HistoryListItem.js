/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HistoryListItem = ({ article }) => (
  <Container>
    <Row className="justify-content-md-center">
      <Col xs lg="2">
        <img src={article.image} alt="" width="200" height="200" />
      </Col>
      <Col md="auto">
        <p>{article.title}</p>
        <p>{article.author}</p>
        <p>{article.description}</p>
      </Col>
      <Col xs lg="2">
        <div>
          <span>{article.begginerWords}</span>
        </div>
        <div>
          <span>{article.intermediateWords}</span>
        </div>
        <div>
          <span>{article.advancedWords}</span>
        </div>
      </Col>
    </Row>
  </Container>
);

export default HistoryListItem;
