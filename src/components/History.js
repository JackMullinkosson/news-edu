import React from 'react';
import HistoryListItem from './HistoryListItem';

const History = () => {
  const store = {
    1: {
      id: 1,
      title: `Harry Potter and the Sorcerer's Stone`,
      author: `J.K.Rowling`,
      image:
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      begginerWords: 334,
      intermediateWords: 1093,
      advancedWords: 443,
    },
    2: {
      id: 2,
      title: `Harry Potter and the Sorcerer's Stone`,
      author: `J.K.Rowling`,
      image:
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      begginerWords: 334,
      intermediateWords: 1093,
      advancedWords: 443,
    },
    3: {
      id: 3,
      title: `Harry Potter and the Sorcerer's Stone`,
      author: `J.K.Rowling`,
      image:
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      begginerWords: 334,
      intermediateWords: 1093,
      advancedWords: 443,
    },
  };

  return (
    <>
      <h1>History</h1>
      {Object.keys(store).map((id) => (
        <HistoryListItem article={store[id]} />
      ))}
    </>
  );
};

export default History;
