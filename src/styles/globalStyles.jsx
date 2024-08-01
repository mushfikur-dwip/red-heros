// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
    width: 100%;
    display: flex;
    justify-content: center;
    aline-items: center;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f9;
    color: #333;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
