import styled from "styled-components";

export const NavStyled = styled.nav`
    background-color: #284D63;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 460px) {
        justify-content: center;
    }

    img{ 
        margin: 15px;
        max-width: 200px;
    }

    input {
        margin: 15px;
        padding: 10px;
        border-radius: 4px;
        border: none;
        max-width: 200px;
        height: 40px;

        &:focus{
            outline: 2px solid #FD1956;
        }
    }
`