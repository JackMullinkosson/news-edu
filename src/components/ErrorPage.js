import { Row, Col } from 'react-bootstrap';

const ErrorPage = () => (
  <Row className="">
    <Col className="text-center">
      <div>
        <h2>OOPS! An error has occurred</h2>
        <h4>Possible reasons:</h4>
        <h5>- Your search most likely did not match any results</h5>
        <h5>- You do not have a valid API key</h5>
        <h5>- You need to disable CORS</h5>
        <h6>You can try the search again...</h6>
      </div>
    </Col>
  </Row>
);
export default ErrorPage;
