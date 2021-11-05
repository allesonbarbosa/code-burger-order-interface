import React, {useState, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Image, 
  Label, 
  Input, 
} from './styles';

import Container from '../../components/ContainerPrincipal';
import H1 from '../../components/Title';
import Button from '../../components/Button';
import ContainerItens from '../../components/ContainerItens';

import CodeBurgerLogo from '../../assets/code-burger-logo.png';

function Home() {

  const [orders, setOrders] = useState([]);
  const inputName = useRef();
  const inputOrder = useRef();
  const history = useHistory();

  async function addNewOrder(){

    const { data: newOrder } = await axios.post("http://localhost:3001/order", {clientName: inputName.current.value, order: inputOrder.current.value});
    setOrders([...orders, newOrder]);
    history.push("/orders");
  }

  return (
    <Container>
      <Image alt="code-burger-logo" src={CodeBurgerLogo}/>
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <Label>Pedido</Label>
        <Input ref={inputOrder} placeholder="Pedido"></Input>
        <Label>Nome do Cliente</Label>
        <Input ref={inputName} placeholder="Nome do Cliente"></Input>
        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
};
export default Home;