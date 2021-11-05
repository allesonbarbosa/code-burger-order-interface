import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {Image, 
  Order } from './styles';

import Container from '../../components/ContainerPrincipal';
import H1 from '../../components/Title';
import Button from '../../components/Button';
import ContainerItens from '../../components/ContainerItens';

import OrderBurgerLogo from '../../assets/order-burger-logo.png';
import Trash from '../../assets/trash.png';

function Orders() {

  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect( ()=>{

    async function showOrders(){
      const { data: newOrder} = await axios.get("http://localhost:3001/order");
      setOrders(newOrder);
    }

    showOrders();

  },[orders]);

  async function deleteOrder(orderId){
    await axios.delete(`http://localhost:3001/order/${orderId}`);

    const newOrders = orders.filter((order) => order.id !== orderId);
    setOrders(newOrders);
  }

  function goHomePage(){
    history.push("/");
  };
  return (
    <Container>
      <Image alt="code-burger-logo" src={OrderBurgerLogo}/>
      <ContainerItens>
        <H1>Pedidos</H1>
        <ul>
          {orders.map( client => (
            <Order key={client.id}>
              <div>
                <p>{client.order}</p><b>{client.clientName}</b>
              </div>
              <button onClick={() => deleteOrder(client.id)}><img src={Trash} alt="lata-de-lixo"/></button>
            </Order>
          ))}
        </ul>
        <Button isBack={true} onClick={goHomePage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
};

export default Orders;