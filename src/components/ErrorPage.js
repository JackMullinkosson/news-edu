import { Row, Col } from 'react-bootstrap';

const ErrorPage = () => (
  <Row className="justify-content-center">
    <Col md={3} className="">
      <div>
        <h2>OOPS! An error has occurred</h2>
        <h4>Possible reasons:</h4>
        <ul>
          <li>
            {' '}
            <h5>You do not have a valid API key</h5>
          </li>
          <li>
            <h5>Poor internet connection</h5>
          </li>
          <li>
            <h5>You need to disable CORS</h5>
          </li>
        </ul>

        <h6>Please try to come back later or refresh the page.</h6>
      </div>
    </Col>
  </Row>
);
export default ErrorPage;
