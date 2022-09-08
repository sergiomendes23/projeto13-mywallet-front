import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <Container>
            <Title>
                <h1>My Wallet</h1>
            </Title>
            <Corpo>
                <Email placeholder="E-mail"></Email>
                <Senha placeholder="Senha"></Senha>
                <Entrar to="/Home" style={{textDecoration: 'none'}}>Entrar</Entrar>
            </Corpo>
            <Cadastrar to="/SignUp" style={{textDecoration: 'none'}}>Primeira vez? Cadastre-se!</Cadastrar>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.div`
    font-family: 'Saira Stencil One';
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`
const Corpo = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 25px;
`
const Email = styled.input`
    width: 326px;
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
const Senha = styled.input`
    width: 326px;
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
const Entrar = styled(Link)`
    width: 326px;
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
    cursor: pointer;
`
const Cadastrar = styled(Link)`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
`