import React, { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/gif';

function App() {
  const [gifs, setGif] = useState([])

  useEffect(function () {
    getGifs({ keyword: "goku" }).then(gifs => setGif(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(gif => <Gif title={gif.title} url={gif.url} id={gif.id}></Gif>)
        }
      </section>
    </div>
  );
}

export default App;
