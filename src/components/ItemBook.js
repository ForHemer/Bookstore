import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';
import progress from '../img/progress.png';

const ItemBook = ({
  title,
  author,
  category,
  id,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    e.preventDefault();
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <div>
          <span>{category}</span>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div className="com-rem-ed">
          <button type="button">Comments</button>
          <button className="left-separator" type="button" onClick={handleRemoveBook}>Remove</button>
          <button className="left-separator" type="button">Edit</button>
        </div>
      </div>
      <div className="book-stat">

        <div className="progress-container">
          <img className="progress-circle-bar" alt="progress-circle-bar" src={progress} />
          <div className="reading-progress">
            <p className="pourcentage">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>

        <div className="reading-chapter">
          <p className="current-chapter">Current chapter</p>
          <p className="chapter-title">Chapter 4</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

ItemBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ItemBook;
