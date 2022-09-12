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
                    {lista.length === 0? 
                    <Nada>
                        <p>Não há registro de entrada ou saída</p>
                    </Nada> 
                    : 
                    <ListaTransacoes lista={lista}/> }
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
        <AllTransation>
            <Count>
                {lista.reverse().map((value) => 
                    <Transation>
                        <Formato>
                            <Data>{value.date}</Data> 
                            <Description>{value.description}</Description> 
                        </Formato>
                        <Valor tipo={value.type}>{Number(value.value).toFixed(2)}</Valor>
                    </Transation>
                )}
            </Count>
            <Saldo valor={saldo}>
                <p>Saldo</p><h1>{saldo.toFixed(2)}</h1>
            </Saldo>
        </AllTransation>
    )
}

const AllTransation = styled.div`
    width: 100%;
    height: 446px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Count = styled.div`
    width: 100%;
    height: 385px;
    overflow-y: auto;
    ::-webkit-scrollbar {
    width: 0px;
}
`
const Formato = styled.div`
    display: flex;
`
const Transation = styled.span`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`
const Data = styled.div`
    margin-right: 10px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    color: #C6C6C6;
`
const Description = styled.div`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    color: #000000;
`
const Valor = styled.div`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.tipo === "income" ? "#03AC00" : "#C70000" };
`
const Saldo = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    p{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;
        color: #000000;
    }
    h1{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 16px;
        color: ${props => props.valor >=0 ? "#03AC00" : "#C70000"};
    }
`
const Nada = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 80px;
    p{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        color: #868686;
    }
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
    display: flex;
    align-items: center;
    justify-content: center;
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
