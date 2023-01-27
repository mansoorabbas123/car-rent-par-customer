import styled from "styled-components";

export const Styled = {
    HeroWrapper : styled.section`
    position: relative;
    &::before{
       content:"";
       position: absolute;
       width:100%;
       height: 600px;
       background-color: aqua;
    }
    `
}