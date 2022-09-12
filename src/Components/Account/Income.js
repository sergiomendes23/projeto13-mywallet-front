import styled from 'styled-components';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import UserContext from '../../Context/UserContext';

export default function Income(){

    let navigate = useNavigate();
    const { token } = useContext(UserContext);
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    async function enviarEntrada(){
        try{

        const body = {
        value: value,
        description: description
        }
        const config = {
            headers: {
            Authorization: `Bearer ${token}`
            }
        }

        const entrada = await axios.post('http://localhost:5000/income', body, config);
        setValue(entrada.value);
        setDescription(entrada.description);
        navigate("/home");
    }
        catch(error){
            console.log(error)
        }
    }


    return (
        <Container>
            <Entrada>
                <h1>Nova entrada</h1>
            </Entrada>
            <Valor 
            placeholder="Valor" 
            type="number" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}></Valor>
            <Descricao placeholder="Descrição" 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}></Descricao>
            <Salvar onClick={enviarEntrada}>Salvar entrada</Salvar>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
`
const Entrada = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    h1{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }
`
const Valor = styled.input`
    width: 100%;
    height: 58px; 
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    border: none;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    box-sizing: border-box;
    padding: 15px;
    ::placeholder{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        color: #000000;
    }
`
const Descricao = styled.input`
    width: 100%;
    height: 58px; 
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    border: none;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    box-sizing: border-box;
    padding: 15px;
    ::placeholder{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        color: #000000;
    }
`
const Salvar = styled.button`
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;`