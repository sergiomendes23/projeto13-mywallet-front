import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Container>
            <Header>
                <h1>Olá, Fulado</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </Header>
            <Dados>
                <Contas>
                    <h1>coeee</h1>
                </Contas>
                <EntradaESaida>
                    <Entrada to="/pagein" style={{textDecoration: 'none'}}>
                        <ItensEntrada>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <h1>Nova entrada</h1>
                        </ItensEntrada>
                    </Entrada>
                    <Saida to="/pageout" style={{textDecoration: 'none'}}>
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
