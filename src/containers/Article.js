/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-useless-escape */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-plusplus */

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form, InputGroup, Col, Row, Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState, useRef } from 'react';
import _ from 'lodash';
import axios from 'axios';
import parse from 'html-react-parser';
import Reverso from 'reverso-api';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { addSaved, removeSaved, setTranslator, setVisited } from '../actions';
import { NoneHighlighted } from './ArticleTextElements/NoneHighlighted';
import { AdvancedHighlighted } from './ArticleTextElements/AdvancedHighlighted';
import { IntermediateHighlighted } from './ArticleTextElements/IntermediateHighlighted';
import { BothHighlighted } from './ArticleTextElements/BothHighlighted';

const Article = ({ articleLocation }) => {
  const reverso = new Reverso();
  const stories = useSelector((state) => state[articleLocation]);
  const savedStories = useSelector((state) => state.saved);
  const translator = useSelector((state) => state.translator);
  const visited = useSelector((state) => state.visited);
  const loading = useSelector((state) => state.loading);
  const thisURL = window.location.href;
  const id = parseInt(thisURL.substring(thisURL.lastIndexOf('/') + 1));
  const thisArticle = _.find(stories, (element) => element.id === id);
  const dispatch = useDispatch();
  const [isAdvancedHighlighted, setIsAdvancedHighlighted] = useState(false);
  const [isIntermediateHighlighted, setIsIntermediateHighlighted] =
    useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [dictionaryPosition, setDictionaryPosition] = useState({});
  const [isGettingPosition, setIsGettingPosition] = useState(true);
  const [translations, setTranslations] = useState('');
  const [supportedLanguages, setSupportedLanguages] = useState([]);
  const noContextLangs = [
    'Bulgarian',
    'Estonian',
    'Finnish',
    'Indonesian',
    'Lithuanian',
    'Latvian',
    'Slovenian',
    'Swedish',
    'Danish',
    'Ukranian',
    'Hungarian',
    'Korean',
    'Slovak',
    'Greek',
    'Czech',
  ];
  const [langNotAvailable, setLangNotAvailable] = useState(false);
  const [contextError, setContextError] = useState(false);
  const [dictionaryBoxIsLoading, setDictionaryBoxIsLoading] = useState(true);
  const [word, setWord] = useState('');
  const [arrOfSentences, setArrOfSentences] = useState([]);
  const [boxHeight, setBoxHeight] = useState(0);
  const authKey = '289916f3-fce1-fe01-b0e0-c97df35cbc8a:fx';
  const ref = useRef(null);
  const ref2 = useRef(null);
  const currentWordRef = useRef(null);
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    dispatch(setVisited(true));
    localStorage.setItem('visited', true);
  };

  useEffect(() => {
    if (!visited) setShow(true);
    else setShow(false);
  }, []);

  useEffect(() => {
    const getSupportedLanguages = async () => {
      const res = await axios.get(
        `https://api-free.deepl.com/v2/languages?auth_key=${authKey}`
      );
      setSupportedLanguages(res.data);
    };
    getSupportedLanguages();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref2.current &&
        !ref2.current.contains(event.target) &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setIsHovering(false);
        setDictionaryBoxIsLoading(true);
        currentWordRef.current.classList.remove('aquamarine-bg');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref2, ref]);

  useEffect(() => {
    if (arrOfSentences.length > 1) {
      setDictionaryBoxIsLoading(false);
    }
  }, [arrOfSentences]);

  useEffect(() => {
    setIsGettingPosition(false);
  }, [boxHeight]);

  const observer = new MutationObserver(() => {
    const currentHeight = ref2?.current?.clientHeight;
    setBoxHeight(currentHeight);
  });

  useEffect(() => {
    if (isHovering) {
      observer.observe(ref2.current, { attributes: true });
    } else {
      observer.disconnect();
    }
  }, [isHovering]);

  const getContext = async (selectedWord) => {
    const contextResponse = await reverso.getContext(
      selectedWord,
      'english',
      translator.language
    );
    return contextResponse;
  };

  // const getCheck = async () => {
  //   const check = await reverso.getContext('the', 'english', 'russian');
  //   console.log(check);
  // };
  // getCheck();

  useEffect(() => {
    const fetchData = async () => {
      const contextResponse = await getContext(word);
      const sentences = contextResponse.examples;
      if (sentences.length < 2) {
        setContextError(true);
        setArrOfSentences([]);
        setDictionaryBoxIsLoading(false);
        return;
      }
      setContextError(false);
      const matchingSentences = [];
      const unmatchingSentences = [];
      sentences.forEach((sentence) => {
        if (sentence.target.includes(translations)) {
          matchingSentences.push(sentence);
        } else unmatchingSentences.push(sentence);
      });
      matchingSentences.sort((a, b) => a.source.length - b.source.length);
      unmatchingSentences.sort((a, b) => a.source.length - b.source.length);
      unmatchingSentences.forEach((sentence) =>
        matchingSentences.push(sentence)
      );
      const shortenedArray = [];
      for (let i = 0; i < 10; i++) {
        const element = matchingSentences[i];
        shortenedArray.push(element);
      }
      setArrOfSentences(shortenedArray);
    };
    if (translations.length >= 1 && !langNotAvailable) fetchData();
    else if (langNotAvailable) setDictionaryBoxIsLoading(false);
  }, [translations]);

  if (loading === true) {
    return <div />;
  } else if (thisArticle === undefined) {
    return (
      <Row>
        <Col>
          <Button as={Link} to="/" className="back-button">
            Back
          </Button>
          <h5 className="missing-article-message">
            This article could not be found...
          </h5>
        </Col>
      </Row>
    );
  }

  const getDefinition = async (selectedWord) => {
    const translationsResponse = await axios.get(
      `https://api-free.deepl.com/v2/translate?auth_key=${authKey}&text=${selectedWord}&target_lang=${translator.translator}`
    );
    setTranslations(translationsResponse?.data?.translations[0].text);
  };

  const handleTranslatorLanguageChange = (e) => {
    setWord('');
    setTranslations('');
    setArrOfSentences([]);
    const { options, selectedIndex } = e.target;
    const selectedOption = options[selectedIndex];
    const selectedTranslator = selectedOption.value;
    const selectedLanguage = selectedOption.textContent;
    dispatch(setTranslator(selectedTranslator, selectedLanguage));
    localStorage.setItem(
      'translator',
      JSON.stringify({
        translator: selectedTranslator,
        language: selectedLanguage,
      })
    );
    if (noContextLangs.includes(selectedLanguage)) {
      setLangNotAvailable(true);
      setDictionaryBoxIsLoading(false);
    } else {
      setLangNotAvailable(false);
    }
  };

  const handleSaveClick = () => {
    if (Object.hasOwn(savedStories, thisArticle.id)) {
      dispatch(removeSaved(thisArticle));
    } else {
      dispatch(addSaved(thisArticle));
    }
  };

  const handleHighlightAdvancedClick = () => {
    if (isAdvancedHighlighted) {
      setIsAdvancedHighlighted(false);
    } else {
      setIsAdvancedHighlighted(true);
    }
  };

  const handleHighlightIntermediateClick = () => {
    if (isIntermediateHighlighted) {
      setIsIntermediateHighlighted(false);
    } else {
      setIsIntermediateHighlighted(true);
    }
  };

  function wordArrToList(arr) {
    const newArr = arr.map((i) => `<li>${i}</li>`);
    return newArr.join('');
  }

  function handleWordClick(e) {
    setIsGettingPosition(true);
    if (
      e.target.innerHTML
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()“”"″]/g, '')
        .trim() === word
    ) {
      setIsHovering(false);
      setWord('');
      setTranslations('');
      setArrOfSentences([]);
      return;
    }
    setIsHovering(true);
    e.target.classList.toggle('aquamarine-bg');
    currentWordRef.current = e.target;
    const rectX = e.clientX;
    const rectY = e.clientY;
    const selectedWord = e.target.innerHTML
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()“”"″]/g, '')
      .trim();
    setDictionaryPosition({
      left: rectX - 100,
      top: rectY + window.scrollY - 36,
    });
    getDefinition(selectedWord);
    setWord(selectedWord);
  }

  function wrapEachWordInSpan(str, arr, intermediateArr, advancedArr) {
    const spaced = str
      .replaceAll('<', ' <')
      .replaceAll('>', '> ')
      .replaceAll('—', ' - ');
    const splitUp = spaced.split(' ');
    const wrapped = splitUp.map((i) => {
      const cleanWord = i
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()“”"″]/g, '')
        .toLowerCase();
      if (i.includes('<source')) {
        return `<div class="hide-source">${i}</div>`;
      } else if (intermediateArr.includes(cleanWord)) {
        return ` <span class="intermediate article-word">${i}</span> `;
      } else if (advancedArr.includes(cleanWord)) {
        return ` <span class="advanced article-word">${i}</span> `;
      } else if (arr.includes(cleanWord))
        return `<span class="article-word">${i}</span>`;
      else return i;
    });

    const joined = wrapped.join(' ');
    return joined.replaceAll('<', ' <').replaceAll('>', '> ');
  }

  const htmlToParse = wrapEachWordInSpan(
    thisArticle.htmlContent,
    thisArticle.allWordsArr,
    thisArticle.intermediateWordsArr,
    thisArticle.advancedWordsArr
  );

  const intermediateSidebar = wordArrToList(thisArticle.intermediateWordsArr);
  const advancedSidebar = wordArrToList(thisArticle.advancedWordsArr);
  const intermediateSidebarJSX = parse(intermediateSidebar);
  const advancedSidebarJSX = parse(advancedSidebar);

  return (
    <div>
      <div className="sidebar-left">
        <Button as={Link} to="/" className="back-button">
          Back
        </Button>
        <Form.Group>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Set Your Language Here</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Then click on a word to get it's translation.
            </Modal.Body>
          </Modal>

          <InputGroup>
            <Form.Select
              onChange={(e) => handleTranslatorLanguageChange(e)}
              aria-label="Default select example"
            >
              <option>{translator.language}</option>
              {supportedLanguages.map((i) => (
                <option value={i.language}>{i.name}</option>
              ))}
            </Form.Select>
          </InputGroup>
        </Form.Group>
        <button
          onClick={handleHighlightIntermediateClick}
          type="button"
          className="highlight-button btn inter-btn"
          style={{
            backgroundColor: isIntermediateHighlighted ? '#101D42' : 'white',
            color: isIntermediateHighlighted ? '#F4F4F9' : 'black',
          }}
        >
          Highlight Intermediate Words
        </button>
        <button
          onClick={handleHighlightAdvancedClick}
          type="button"
          className="highlight-button btn adv-btn"
          style={{
            backgroundColor: isAdvancedHighlighted ? '#101D42' : 'white',
            color: isAdvancedHighlighted ? '#F4F4F9' : 'black',
          }}
        >
          Highlight Advanced Words
        </button>
        <ul
          className="sidebar-intermediate-word-list"
          style={{
            display: isIntermediateHighlighted === true ? 'block' : 'none',
          }}
        >
          {intermediateSidebarJSX}
        </ul>
        <ul
          className="sidebar-advanced-word-list"
          style={{
            display: isAdvancedHighlighted === true ? 'block' : 'none',
          }}
        >
          {advancedSidebarJSX}
        </ul>
      </div>

      {Object.hasOwn(savedStories, thisArticle?.id) ? (
        <Button onClick={handleSaveClick} className="save-button saved">
          Saved
        </Button>
      ) : (
        <Button onClick={handleSaveClick} className="save-button">
          Save
        </Button>
      )}
      <div className="article-box">
        <h2>{thisArticle?.title}</h2>
        <a href={thisArticle?.url}>{thisArticle?.url}</a>
        <div className="title-and-author">
          <h6>{thisArticle?.author} | </h6> <h6> {thisArticle?.source}</h6>
        </div>
        <div
          ref={ref}
          className="dictionary-box"
          style={{
            display:
              dictionaryBoxIsLoading === true && isHovering === true
                ? 'flex'
                : 'none',
            position: 'absolute',
            left: `${dictionaryPosition.left}px`,
            top: `${dictionaryPosition.top - 200}px`,
            height: `200px`,
          }}
        >
          <h4 className="translations">(loading..)</h4>
          <div
            className="sentence-box"
            style={{
              display: langNotAvailable === false ? 'block' : 'none',
            }}
          >
            {' '}
            <span className="sentence-label">EN</span>
            <p className="sentence">(loading..)</p>
            <span className="sentence-label">{translator.translator}</span>
            <p className="sentence">(loading..)</p>
          </div>
        </div>
        <div
          className="dictionary-box"
          ref={ref2}
          style={{
            display:
              dictionaryBoxIsLoading === false && isHovering === true
                ? 'flex'
                : 'none',
            position: 'absolute',
            left: `${dictionaryPosition.left}px`,
            top: `${dictionaryPosition.top - boxHeight}px`,
            visibility: isGettingPosition ? 'hidden' : 'visible',
            height: langNotAvailable === true ? '200px' : 'auto',
          }}
        >
          <h4 className="translations">{translations}</h4>
          <p style={{ display: langNotAvailable === true ? 'block' : 'none' }}>
            Sorry, we don't yet have sample sentence support for{' '}
            {translator.language}.
          </p>
          <p style={{ display: contextError === true ? 'block' : 'none' }}>
            Sorry, can't return sentences with that word.
          </p>
          <Carousel
            showArrows
            showThumbs={false}
            showIndicators={false}
            style={{
              display:
                langNotAvailable === false && contextError === false
                  ? 'flex'
                  : 'none',
            }}
          >
            {arrOfSentences.map((s, i) => (
              <div key={i} className="sentence-box">
                <span className="sentence-label">EN</span>
                <p className="sentence">"{s.source}"</p>
                <span className="sentence-label">{translator.translator}</span>
                <p className="sentence">"{s.target}"</p>
              </div>
            ))}
          </Carousel>
        </div>
        <div>
          {isAdvancedHighlighted === false &&
          isIntermediateHighlighted === false ? (
            <NoneHighlighted
              htmlToParse={htmlToParse}
              handleWordClick={handleWordClick}
            />
          ) : null}
        </div>
        <div>
          {isAdvancedHighlighted === false &&
          isIntermediateHighlighted === true ? (
            <IntermediateHighlighted
              htmlToParse={htmlToParse}
              handleWordClick={handleWordClick}
            />
          ) : null}
        </div>
        <div>
          {isAdvancedHighlighted === true &&
          isIntermediateHighlighted === false ? (
            <AdvancedHighlighted
              htmlToParse={htmlToParse}
              handleWordClick={handleWordClick}
            />
          ) : null}
        </div>
        <div>
          {isAdvancedHighlighted === true &&
          isIntermediateHighlighted === true ? (
            <BothHighlighted
              htmlToParse={htmlToParse}
              handleWordClick={handleWordClick}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Article;
