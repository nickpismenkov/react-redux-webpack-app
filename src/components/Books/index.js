import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../actions/Books';
import { Book } from '../Book';
import { Loader } from '../Loader';
import { Pagination } from '../Pagination';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    (async () => dispatch(fetchBooks()))();
  }, []);

  return (
    <div className="app__books__main container">
      {loading ? (
        <div className="app__books__main__loader row justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        books.map((book) => <Book key={book.id} book={book} />)
      )}
      <Pagination />
    </div>
  );
};

export { Books };
