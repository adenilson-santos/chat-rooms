import React, { Fragment } from "react";

import GlobalStyleMain from "./style";

export default class Main extends React.Component {
  state = {
    inputUser: "",
    saved: localStorage.getItem("@app_chat:nickname") || false,
    nickname: ""
  };

  init = e => {
    e.preventDefault();

    const { inputUser } = this.state;

    this.storeNick(inputUser);
    this.setState({ saved: true });
  };

  storeNick = nickname => {
    localStorage.setItem("@app_chat:nickname", nickname);
  };

  render() {
    const { inputUser, saved } = this.state;

    return (
      <Fragment>
        <GlobalStyleMain />
        <div>
          <h1>Bem-Vindo</h1>
          <section>
            <h2>Rooms</h2>
            <a href="/chat">> Ir para sala principal.</a>
            <a href="/chat">> Ir para sala secundaria.</a>
            <a href="/chat">> Ir para sala terciaria.</a>
          </section>
          <form onSubmit={this.init}>
            {saved ? (
              <h3 id="nickname">
                {" "}
                {saved}{" "}
                <button onClick={() => this.setState({ saved: false })}>
                  Alterar nickname
                </button>
              </h3>
            ) : (
              <Fragment>
                <input
                  type="text"
                  placeholder="Seu nick."
                  value={inputUser}
                  onChange={e => this.setState({ inputUser: e.target.value })}
                />

                <button type="submit">Salvar meu nick</button>
              </Fragment>
            )}
          </form>
        </div>
      </Fragment>
    );
  }
}
