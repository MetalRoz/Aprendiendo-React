import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>APP</h1>
        <Link to='/gif/goku'>
          Gif de Goku
        </Link>
        <Link to='/gif/Vegeta'>
          Gif de Vegeta
        </Link>
        <Route
        component={ListOfGifs}
        path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
