import React from 'react';

const Book = ({ book }) => {
  return (
    <ul className="list-group list-group-flush border border-primary m-2">
      <li className="list-group-item">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-book"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"
          />
          <path
            fillRule="evenodd"
            d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"
          />
        </svg>
        <b className="m-2">Book ID: </b>
        <span className="border border-success p-1">{book.id}</span>
      </li>
      <li className="list-group-item">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-bookmark-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V3z"
          />
        </svg>
        <b className="m-2">Book name: </b>
        <span className="border border-info p-1">{book.name}</span>
      </li>
      <li className="list-group-item">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-file-person-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zm6 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 11.825 10.623 11 8 11s-4.146.826-5 1.755V13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"
          />
        </svg>
        <b className="m-2">Book author: </b>
        <span className="border border-info p-1">{book.author}</span>
      </li>
      <li className="list-group-item">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-pencil"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
          />
          <path
            fillRule="evenodd"
            d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
          />
        </svg>
        <b className="m-2">Book genre: </b>
        <span className="border border-info p-1">{book.genre}</span>
      </li>
    </ul>
  );
};

export { Book };
