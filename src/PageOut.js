import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function PageOut(){
    return (
        <Container>
            <Entrada>
                <h1>Nova saída</h1>
            </Entrada>
            <Valor placeholder="Valor"></Valor>
            <Descricao placeholder="Descrição"></Descricao>
            <Salvar to="/Home" style={{textDecoration: 'none'}}>Salvar saída</Salvar>
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
const Salvar = styled(Link)`
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