import React, { useState } from 'react';
import './App.css';

const GIFS = [
  'https://media1.giphy.com/media/jKpVHextCiB8c/giphy.gif?cid=ecf05e47sejq9jyvrj8v31z3o66txanxxa91m5sfahomxyfh&rid=giphy.gif&ct=g',
  'https://media1.giphy.com/media/txsJLp7Z8zAic/giphy.gif?cid=ecf05e47sejq9jyvrj8v31z3o66txanxxa91m5sfahomxyfh&rid=giphy.gif&ct=g'
]

const DIFFERENT_GIFS = [
  'https://media2.giphy.com/media/HDR31jsQUPqQo/giphy.gif?cid=ecf05e47wahdia9ccr0m2582h2vdces7vlcx9hog2ln787w4&rid=giphy.gif&ct=g'
]

function App() {
  const [gifs, setGif] = useState(GIFS)
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(gif => <img src={gif}></img>)
        }
        <button onClick={() => setGif(DIFFERENT_GIFS)}>CAMBIAR</button>
      </section>
    </div>
  );
}

export default App;
