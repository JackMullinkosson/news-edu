/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const loading = useSelector((state) => state.loading);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Row>
        <Col xs={{ offset: 6 }}>
          {loading ? <div className="loader" /> : null}
        </Col>
      </Row>
      <Main />
    </div>
  );
}

export default App;
