/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addHistory, addSaved, removeSaved } from '../actions';

const ArticleListItem = ({ id, history }) => {
  const [isHovering, setIsHovering] = useState('');

  const stories = useSelector((state) => state.articles);
  const savedStories = useSelector((state) => state.saved);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(addHistory(stories[id]));
    history.push(`/${stories[id].id}`);
  };

  const handleSaveClick = () => {
    if (Object.hasOwn(savedStories, id)) {
      dispatch(removeSaved(stories[id]));
    } else {
      dispatch(addSaved(stories[id]));
    }
  };
  const calculatePercentage = (readingLevel) =>
    `${Math.floor(readingLevel * 100)}%`;

  return (
    <tbody>
      <tr>
        <td>
          <div
            className="reading-level-box"
            onMouseEnter={() => {
              setIsHovering(`${stories[id].id}`);
            }}
            onMouseLeave={() => {
              setIsHovering('');
            }}
          >
            <div
              className="extra-reading-level-info"
              style={{
                display: isHovering === `${stories[id].id}` ? 'block' : 'none',
              }}
            >
              <div className="extra-reading-level-info-text">
                <h5>Advanced words:</h5>
                <span>{stories[id]?.advancedWordsString} </span>
                <span
                  style={{
                    display:
                      stories[id].advancedWordsString?.length >= 120
                        ? 'inline-block'
                        : 'none',
                  }}
                >
                  ...(continued)
                </span>
              </div>
            </div>
            <ul className="article-info-ul">
              <h5>Article Info</h5>
              <li>Word count: {stories[id].wordCount}</li>
              <li>
                Beginner words: {calculatePercentage(stories[id].beginnerWords)}
              </li>
              <li>
                Intermediate words:{' '}
                {calculatePercentage(stories[id].intermediateWords)}
              </li>
              <li>
                Advanced words: {calculatePercentage(stories[id].advancedWords)}
              </li>
            </ul>
          </div>
          <div className="relatively-positioned-div" />
        </td>
        <td className="article-text-cell">
          <h3 onClick={clickHandler}>{stories[id].title}</h3>
          <small>{stories[id].source}</small>
          <small> | {stories[id].author}</small>
          <p>{stories[id].description}</p>
        </td>
        <td>
          <img
            onClick={clickHandler}
            src={stories[id].image}
            alt="article header"
          />
        </td>
        <td>
          <i
            onClick={handleSaveClick}
            className="fa-solid fa-star"
            style={{
              color: Object.hasOwn(savedStories, id) ? 'yellow' : '',
            }}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default ArticleListItem;
