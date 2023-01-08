/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useSelector } from 'react-redux';

const HistoryListItem = ({ id, history }) => {
  const clickHandler = () => {
    history.push(`/history/${stories[id].id}`);
  };

  const calculatePercentage = (readingLevel) =>
    `${Math.floor(readingLevel * 100)}%`;

  const stories = useSelector((state) => state.history);
  return (
    <tbody>
      <tr>
        <td>
          <div className="reading-level-box">
            <ul>
              <h6>
                <u>Article Info</u>
              </h6>
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
        </td>
        <td className="article-text-cell">
          <h3 onClick={clickHandler}>{stories[id].title}</h3>
          <small>{stories[id].source}</small>
          <small> | {stories[id].author}</small>
          <p>{stories[id].description}</p>
        </td>
        <td>
          <img src={stories[id].image} alt="article header" />
        </td>
      </tr>
    </tbody>
  );
};

export default HistoryListItem;
