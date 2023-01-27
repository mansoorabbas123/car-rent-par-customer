import styled from "styled-components";

export const Styled = {
    HeaderTopWrapper : styled.nav`
     background-color: #4D4D4D;
     padding: 0.5rem;
     color: white;
    `,
    Item: styled.div`
     border: 1px solid red;
     display: flex;
     div {
     &.logo {
        font-size:1.5rem;
        margin-left: 1rem;
     }
    }
    
    `,
}