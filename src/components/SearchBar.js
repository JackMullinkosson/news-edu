/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Form, InputGroup, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStories } from '../helpers/fetchStoryData';
import SearchFormDisabled from './SearchFormDisabled';

import {
  addStories,
  changeDifficulty,
  changeLanguage,
  changeSortBy,
  setLoading,
  changePageSize,
} from '../actions';

/* eslint-disable no-unused-vars */

// const SearchBar = ({ wordList, cocaWords }) => {
const SearchBar = () => {
  const { loading, searchDisabled } = useSelector((state) => state);
  const [query, setQuery] = useState('news');
  const { pageSize } = useSelector((state) => state.sort);
  const { cocaWords, wordList } = useSelector((state) => state.wordInfo);

  const search = async () => {
    try {
      dispatch(setLoading(true));
      const storiesData = await fetchStories(
        query,
        pageSize,
        await wordList,
        await cocaWords
      );
      dispatch(addStories(storiesData));
    } catch (e) {
      console.error(e);
      dispatch(addStories(null));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    search();
  }, [pageSize]);

  const dispatch = useDispatch();

  const handleSubmitClick = () => search();

  const handleReadingLevelChange = (e) => {
    dispatch(changeDifficulty(e.target.value));
  };

  const handleLanguageChange = (e) => dispatch(changeLanguage(e.target.value));

  const handleSortByChange = (e) => dispatch(changeSortBy(e.target.value));

  const handleResultsChange = (e) => {
    const userChoice = parseInt(e.target.value);
    dispatch(changePageSize(userChoice));
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Form className="m-3">
          {searchDisabled ? (
            <SearchFormDisabled />
          ) : (
            <Form.Group>
              <InputGroup>
                <Form.Control
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search to find articles..."
                  className="search-bar"
                />
                <InputGroup.Text
                  onClick={handleSubmitClick}
                  role="button"
                  type="submit"
                  className="btn btn-search"
                  as={Link}
                  to="/"
                >
                  Search
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          )}
          <Row className="pt-3">
            <Col md={4}>
              <Form.Group>
                <InputGroup>
                  <Form.Select
                    onChange={(e) => handleReadingLevelChange(e)}
                    aria-label="Default select example"
                  >
                    <option value="default">Reading Level</option>

                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <InputGroup>
                  <Form.Select
                    onChange={(e) => handleSortByChange(e)}
                    aria-label="Default select example"
                  >
                    <option value="default">Sort By</option>
                    <option value="beginnerToAdvanced">
                      Beginner - Advanced
                    </option>
                    <option value="advancedToBeginner">
                      Advanced - Beginner
                    </option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <InputGroup>
                  <Form.Select
                    onChange={(e) => handleResultsChange(e)}
                    aria-label="Default select example"
                  >
                    <option>Results</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50 (Slow)</option>
                    <option value="100">100 (Slower)</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchBar;
