import { createGlobalStyle } from "styled-components";

import "@fortawesome/fontawesome-free/css/all.css";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        padding: 0; margin: 0;
        outline: 0;
    }

    body{
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
        font-family: Arial, Helvetica, sans-serif;
        background: rgb(141, 75, 143)
    }
`;

export default GlobalStyle;
