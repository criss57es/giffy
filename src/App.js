import React, { useEffect, useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

export default function App() {

  const [keyword, setKeyword] = useState('panda');

  return (
    <div className="App">
      <section className="App-content">
        <label>Buscar: </label>
        <input
          type='text'
          onKeyUp={
            (event) => {
              setKeyword(event.target.value)
            }}
          style={{ margin: '20px' }}
        ></input>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

