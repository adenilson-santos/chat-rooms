import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chat from "./pages/Chat";
import Main from "./pages/Main";

import GlobalStyle from "./style/GlobalStyle";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/chat2" component={Chat} />
        <Route exact path="/chat3" component={Chat} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
