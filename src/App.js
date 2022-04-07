import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter"

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/' component={Home}>
          <img className='App-logo'
            alt='Giffy logo'
            src='/assets/logo.png' />
        </Link>


        <Route component={Home} path='/' />
        <Route component={SearchResults} path='/search/:keyword' />
        <Route component={Detail} path='/gif/:id' />

      </section>
    </div>
  );
}

