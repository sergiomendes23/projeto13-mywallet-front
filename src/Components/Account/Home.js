import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../Context/UserContext';
import axios from 'axios';

export default function Home() {

    const [lista, setLista] = useState([]);
    const { token } = useContext(UserContext);
    const { usuario } = useContext(UserContext);
    let navigate = useNavigate();
    

    useEffect(() => {
        async function buscarDados(){
            try {
                const config = {
                    headers: {
                    Authorization: `Bearer ${token}`
                    }
                }
                
                const listarDados = await axios.get('http://localhost:5000/balance', config);
                setLista(listarDados.data)
            } catch (error) {
                console.log(error.message)
                navigate('/');
            }
        }
        buscarDados()
    }, []);

    function signOut() {
        navigate('/');
    }

    return (
        <Container>
            <Header>
                <h1>Olá, {usuario}</h1>
                <ion-icon name="exit-outline" onClick={signOut}></ion-icon>
            </Header>
            <Dados>
                <Contas>
                    {lista.length === 0? <span>'tem nada'</span> : <ListaTransacoes lista={lista} />}
                </Contas>
                <EntradaESaida>
                    <Entrada to="/income" style={{textDecoration: 'none'}}>
                        <ItensEntrada>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <h1>Nova entrada</h1>
                        </ItensEntrada>
                    </Entrada>
                    <Saida to="/outcome" style={{textDecoration: 'none'}}>
                        <ItensSaida>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <h1>Nova saída</h1>
                        </ItensSaida>
                    </Saida>
                </EntradaESaida>
            </Dados>
        </Container>
    )
}

function ListaTransacoes({lista}){

    const saldo = lista.reduce((acumulador, valor) => {
        if(valor.type === 'income'){
            return acumulador+Number(valor.value)
        }else{
            return acumulador-Number(valor.value)
        }
    }, 0)

    return (
        <>
            <div>
                {lista.map((value) => 
                    <Transition><Data>{value.date}</Data> <Description>{value.description}</Description> <Valor>{Number(value.value).toFixed(2)}</Valor></Transition>
                )}
            </div>
            <div>
                <p>Saldo</p><h1>{saldo}</h1>
            </div>
        </>
    )
}

const Transition = styled.div`
`
const Data = styled.div`
`
const Description = styled.div`
`
const Valor = styled.div`
`
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
`
const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    h1{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }
    ion-icon{
        width: 24px;
        height: 24px;
        color: #FFFFFF;
        cursor: pointer;
    }
`
const Dados = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
`
const Contas = styled.div`
    width: 100%;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;

`
const EntradaESaida = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
`
const Entrada = styled(Link)`
    width: 100vw;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    margin-right: 5px;
    border: none;
`
const ItensEntrada = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    padding: 5px;
    
        h1{
            font-family: 'Raleway';
            font-weight: 700;
            font-size: 17px;
            color: #FFFFFF;
            text-align: left;
        }
        ion-icon{
            width: 22px;
            height: 22px;
            color: #FFFFFF;
        }
`
const Saida = styled(Link)`
    width: 100vw;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    margin-left: 5px;
    border: none;
`
const ItensSaida = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    padding: 5px;
    
        h1{
            font-family: 'Raleway';
            font-weight: 700;
            font-size: 17px;
            color: #FFFFFF;
            text-align: left;
        }
        ion-icon{
            width: 22px;
            height: 22px;
            color: #FFFFFF;
        }
`
