import { createGlobalStyle } from "styled-components";

const GlobalStyleChat = createGlobalStyle`


    #wrapper {
        min-height: 100%;
        width: 100%;
        margin-bottom: 30px;
        padding: 10px;
    }

    form {
        position:fixed;
        bottom: 0px;
        left:0px;
        width: 100%;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
        padding: 5px;

        #nickname {
            background:white;
            padding: 10px 15px;
            border-radius: 5px;
        }

        input {
            border: 0;
            border-radius: 3px;
            padding: 10px 15px;
            margin: 10px;
            flex: 1;
            flex-wrap:wrap
        }

        button {
            padding: 10px 15px;
            border-radius: 0px;
            border: 0;
            color: white;
            background: limegreen;
            font-weight: 800;
            cursor: pointer
        }
    }

    #modal {
        position:fixed;
        top: 0px;
        right: 0px;
        background:green;
        color: white;
        border:0;
        padding: 10px 15px;
    }
`;

export default GlobalStyleChat;
