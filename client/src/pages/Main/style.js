import { createGlobalStyle } from "styled-components";

const GlobalStyleMain = createGlobalStyle`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    background: rgb(141, 75, 143);
    color: white;
    

    section {
      background: white;
      color: black;
      padding: 5px;
      display:flex;
      flex-direction: column;
      margin: 10px;

      a {
        text-decoration: none;
        padding: 5px;
        margin-bottom: 10px;
        color: black;
      }
    }

    form {
      display: flex;
      flex-direction: column;
    }

    input {
        border: 0;
        border-radius: 20px;
        padding: 10px 15px;
        margin: 10px;
    }

    button {
        padding: 10px 15px;
        border: 0;
        color: white;
        background: limegreen;
        font-weight: 800;
        cursor: pointer
    }
  }
`;

export default GlobalStyleMain;
