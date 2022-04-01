import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import ItemBook from './ItemBook';
import Form from './Form';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <section className="container">
      <div>
        {bookList.map((book) => (
          <ItemBook
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <Form />
    </section>
  );
};

export default Books;
