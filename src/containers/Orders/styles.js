import styled from 'styled-components';

export const Image = styled.img `
`;
export const ContainerItens = styled.div `
    display: flex;
    flex-direction: column;
    padding: 25px 36px;
`;
export const Order = styled.li`
    color:white;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 57px;
    padding: 18px 27px;
    width: 342px;
    height: 101px;
    border-radius: 14px;
    margin-bottom: 16px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 15px;
    }
    p{
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
    b{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
    button{
        cursor: pointer;
        background: none;
        border: none;
    }

`