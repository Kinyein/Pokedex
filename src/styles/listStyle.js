import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 20px;
    color: #0C1956;

    div{
        background-color: #70E0E1;
        width: 200px;
        height: 110px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-radius: 5px;
    }
`

export const MarcaPaginas = styled.div`
    margin: 40px;
    display: flex;
    justify-content: center;
    gap: 10px;

    button.next{
        transform: scale(1.1);
    }

    button{ 
        padding: 10px 20px;
        border-radius: 4px;
        border: none;
        background-color: #38627a;
        font-size: 17px;
        color: #ffff;
        transition: .3s;

        &:hover{
            cursor: pointer;
            transform: scale(1.1);
        }

        &:active{
            background-color: #1e4256;
            transform: scale(1);
        }
    }

    
`

export const PokeCardDetail = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img {
        width: 60%;

        @media screen and (max-width: 450px) {
            width: 100%;
        }
    }

`