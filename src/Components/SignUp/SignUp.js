import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});
    console.log(usuario)

    function handleForm(e) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function enviarCadastro(e) {
        e.preventDefault();
        const {nome, email, senha, confirmeSenha} = usuario

        if(!nome || !email || !senha){
            return alert('Todos os campos são obrigatórios!')
        }
        if(senha !== confirmeSenha){
            return alert('As senhas devem ser iguais!')
        }

        try{
            await axios.post('http://localhost:5000/cadastro', {nome, email, senha})
            navigate('/')
        }catch(error){
            alert(error.response.data)
        }
    }

    return (
        <Container>
            <Title>
                <h1>My Wallet</h1>
            </Title>
            <Corpo onSubmit={enviarCadastro}>
                <Nome 
                placeholder="Nome" 
                type="text"
                name="nome"
                onChange={handleForm}
                required></Nome>
                <Email 
                placeholder="E-mail"
                type="email"
                name="email"
                onChange={handleForm}
                required></Email>
                <Senha 
                placeholder="Senha"
                type="password"
                name="senha"
                onChange={handleForm}
                required></Senha>
                <ConfirmeSenha 
                placeholder="Confirme a Senha"
                type="password"
                name="confirmeSenha"
                onChange={handleForm}
                required></ConfirmeSenha>
                <Cadastrar style={{textDecoration: 'none'}}>Cadastrar</Cadastrar>
            </Corpo>
            <Entrar to="/" style={{textDecoration: 'none'}}>Já tem conta? Entre agora!</Entrar>
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
const Nome = styled.input`
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
const ConfirmeSenha = styled.input`
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
const Cadastrar = styled.button`
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
const Entrar = styled(Link)`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
`