import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomonedas';
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
margin-top: 20px;
font-weight: bold;
font-size: 20px;
padding: 10px;
background-color: #66A2FE;
border: none;
width: 100%;
border-radius: 10px;
color: white;
transition: background-color .3s ease;

&&:hover {
    background-color: #326AC0;
    cursor: pointer;
}
`

const Formulario = ({guardarCriptomoneda, guardarMoneda}) => {

    const [listacripto, guardarCriptomonedas] = useState([])
    const [error, guardarError] = useState(false)

    const monedas = [
        {codigo: "USD", nombre: "Dólar de Estados Unidos"},
        {codigo: "MXN", nombre: "Peso Mexicano"},
        {codigo: "EUR", nombre: "Euro"},
        {codigo: "GBP", nombre: "Libra Esterlina"},
    ]

    const [moneda, SelectMonedas, actualizarState] = useMoneda("Elige tu moneda", "", monedas)

    const [criptomoneda, SelectCripto] = useCriptomoneda("Elige tu criptomoneda", "", listacripto)

    useEffect(()=> {
        const consultarApi = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const resultado = await axios.get(url)

            guardarCriptomonedas(resultado.data.Data)
        }

        consultarApi()
    }, [])

    const cotizarMoneda = e => {
        e.preventDefault()

        if(moneda === "" || criptomoneda === "") {
            guardarError(true)
            return
        }
        guardarError(false)
        guardarMoneda(moneda)
        guardarCriptomoneda(criptomoneda)
    }

    return ( 
        <form onSubmit={cotizarMoneda}>

            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}

            <SelectMonedas/>

            <SelectCripto/>
            
            <Boton type='submit' value="Calcular"></Boton>
        </form>
     );
}
 
export default Formulario;