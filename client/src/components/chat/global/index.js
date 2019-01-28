import React from "react";

import ChatStyle from "./style";

const ChatGlobal = ({ messages, author }) => (
  <ChatStyle id="chat">
    {messages.map(message =>
      message.author === author ? (
        <div id="emit">
          <ul>
            <li>
              <strong style={{ color: message.color }}>
                {message.author}:{" "}
              </strong>{" "}
              {message.content}
            </li>
            <small>{message.createdAt}</small>
          </ul>
        </div>
      ) : (
        <div id="on">
          <ul>
            <li>
              <strong style={{ color: message.color }}>
                {" "}
                {message.author}:{" "}
              </strong>{" "}
              {message.content}
            </li>
            <small>{message.createdAt}</small>
          </ul>
        </div>
      )
    )}
  </ChatStyle>
);

export default ChatGlobal;
