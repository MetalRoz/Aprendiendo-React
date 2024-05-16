import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-size: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.5s ease;
  margin-top: 20px;
  
  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  const [frase, guardarFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const frase = await api.json();

    guardarFrase(frase[0]);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarApi}>Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
