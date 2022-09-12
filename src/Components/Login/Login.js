import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../Context/UserContext';


export default function Login() {

    let navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const { setToken } = useContext(UserContext);
    const { setUsuario } = useContext(UserContext);

    async function enviarFomulario(e) {
        
        e.preventDefault();
        
        const body = {
            email,
            senha
        }

        if (!email || !senha){
            alert('Email ou Senha incorretos! Tente novamente.');
            return
        }

        try{
            const login = await axios.post('http://localhost:5000/login', body);
            setToken(login.data.token);
            setUsuario(login.data.nome);
            navigate("/home");
        }catch(error){
            alert(error.response.data);
        }
        
    }

    return (
        <Container>
            <Title>
                <h1>My Wallet</h1>
            </Title>
            <Corpo onSubmit={enviarFomulario}>
                <Email 
                placeholder="E-mail"
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                required></Email>
                <Senha 
                placeholder="Senha"
                type="password"
                name="senha"
                onChange={e => setSenha(e.target.value)}
                required></Senha>
                <Entrar type="submit">Entrar</Entrar>
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
const Corpo = styled.form`
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
const Entrar = styled.button`
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