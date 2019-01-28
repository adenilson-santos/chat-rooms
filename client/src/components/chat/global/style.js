import styled from "styled-components";

const ChatStyle = styled.div`
  color: #000;
  padding: 10px;

  div {
    margin: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  #on {
    align-items: flex-start;
    margin-left: -10px;

    ul {
      list-style: none;
      color: black;
      border-radius: 10px;
      max-width: 60%;
      padding: 10px;
      background: white;

      small {
        font-size: 10px;
      }
    }
  }

  #emit {
    align-items: flex-end;

    ul {
      list-style: none;
      color: black;
      border-radius: 10px;
      max-width: 60%;
      padding: 10px;
      background: white;

      small {
        font-size: 10px;
      }
    }
  }
`;

export default ChatStyle;
