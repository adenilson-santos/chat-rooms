import React, { Component, Fragment } from "react";
import io from "socket.io-client";

import ChatGlobal from "../../components/chat/global";
import GlobalStyleChat from "./style";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

const colors = [
  "rgb(165, 80, 80)",
  "rgb(194, 182, 76)",
  "rgb(98, 111, 230)",
  "rgb(98, 230, 157)"
];

const socket = io(`http://192.168.0.2:3000`, {
  reconnection: true,
  reconnectionDelay: 500,
  reconnectionAttempts: 5,
  query: {
    name: localStorage.getItem("@app_chat:nickname"),
    color: colors[parseInt(Math.random() * (4 - 0) + 0)]
  }
});

class App extends Component {
  state = {
    messages: [],
    author: "",
    content: "",
    users: [],
    modalIsOpen: false,
    myColor: ""
  };

  componentDidMount() {
    this.subscribeEvents();
    this.setState({ author: localStorage.getItem("@app_chat:nickname") });
  }

  subscribeEvents = () => {
    socket.on("users", users => {
      this.setState({ users });
    });

    socket.on("get messages", data => {
      this.setState({ messages: data });
    });

    socket.on("new messages", data => {
      this.setState({ messages: [...this.state.messages, data] });
    });
  };

  handleAddMessage = e => {
    e.preventDefault();

    const { content } = this.state;

    socket.emit("new message", {
      author: localStorage.getItem("@app_chat:nickname"),
      content,
      createdAt: new Date()
    });

    this.setState({ content: "" });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <Fragment>
        <GlobalStyleChat />
        <div id="wrapper">
          {/* <Header /> */}
          <section>
            <button id="modal" onClick={this.openModal}>
              {this.state.users.length} Usuários online.
            </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              {this.state.users.map(user =>
                user.name === localStorage.getItem("@app_chat:nickname") ? (
                  <p>Você</p>
                ) : (
                  <p>
                    {user.name} | <i class="fas fa-comment" />
                  </p>
                )
              )}
            </Modal>
            <ChatGlobal
              messages={this.state.messages}
              author={this.state.author}
            />
            {/* <UsersList users={this.state.users} /> */}
          </section>
          <form id="text-area" onSubmit={this.handleAddMessage}>
            <input
              type="text"
              name="content"
              placeholder="Digite sua mensagem"
              value={this.state.content}
              autoComplete="off"
              onChange={e => this.setState({ content: e.target.value })}
            />
            <button type="submit">>></button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default App;
