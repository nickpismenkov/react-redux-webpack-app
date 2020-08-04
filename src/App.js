import React from 'react';
import { Navbar } from './components/Navbar';
import { Books } from './components/Books';

const App = () => {
  return (
    <>
      <div className="app__nav">
        <Navbar />
      </div>
      <div className="app__books">
        <Books />
      </div>
    </>
  );
};

export { App };
