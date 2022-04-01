const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LIST_BOOK = 'bookStore/books/LIST_BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LkccQjVGSRTJTe3ajnr5/books';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);

    case LIST_BOOK:
      return action.payload;

    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const listBooks = (payload) => ({
  type: LIST_BOOK,
  payload,
});

export const postBook = (payload) => (
  async (dispatch) => {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    dispatch(addBook(payload));
  }
);

/* export const deleteBook = (id) => async (dispatch) => {
  const DELETE_BOOK = `${URL}/${id}`;
  const response = await fetch(DELETE_BOOK, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/JSON',
    },
  });

  if (response.status === 201) {
    dispatch(removeBook(id));
  }
}; */

/* export const getBooks = async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  const books = Object.getOwnPropertyNames(data).map((id) => ({
    item_id: id,
    ...data[id][0],
  }));
  dispatch(listBooks(books));
}; */

export const deleteBook = (id) => async (dispatch) => {
  const DELETE_BOOK = `${URL}/${id}`;
  const response = await fetch(DELETE_BOOK, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    dispatch(removeBook(id));
  }
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch(URL);
  const APIbooks = await response.json();
  const books = Object.getOwnPropertyNames(APIbooks).map((id) => ({
    item_id: id,
    ...APIbooks[id][0],
  }));
  dispatch(listBooks(books));
};

export default booksReducer;
