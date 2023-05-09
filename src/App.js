/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const loading = useSelector((state) => state.loading);

  const [text, setText] = useState(
    'Standby.. This might take like 10 seconds..'
  );
  const [elapsedTime, setElapsedTime] = useState(0);
  const loadingTime = 20000;
  const texts = [
    { text: 'Standby.. This might take like 10 seconds..', time: 2000 },
    { text: 'The app has to manually extract articles..', time: 4000 },
    {
      text: 'And then cross-reference the content of those articles to our word list..',
      time: 6000,
    },
    {
      text: 'Then we use our super secret algorithm to determine an articles reading level..',
      time: 8000,
    },
    {
      text: "It's gonna be worth it trust us.. Just a couple more seconds..",
      time: loadingTime,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentText = texts.find(
      (textObj) => elapsedTime < textObj.time
    )?.text;
    if (currentText) {
      setText(currentText);
    }
  }, [elapsedTime]);

  return (
    <div className="App">
      <Header />
      <SearchBar />

      {loading ? (
        <>
          <Row>
            <Col xs={{ offset: 6 }}>
              <div className="loader" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={{ offset: 3 }}>
              <h3 className="loader-text">{text}</h3>
            </Col>
          </Row>
        </>
      ) : null}
      <Main />
    </div>
  );
}

export default App;
