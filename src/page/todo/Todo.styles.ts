import styled, {createGlobalStyle } from "styled-components";

export const StyledTodo = styled.div`
    background: #454545;
    width:100%;
    height: 100%;

`;

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #454545;
    
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
`;