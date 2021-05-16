import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./Login";

const AppDirector = () => {
  return (
    <Switch>
      <Route path={"/"} exact render={() => <Redirect to={"/login"} />} />
      <Route path={"/login"} exact component={Login} />
      <Route path={"/app"} exact component={App} />
    </Switch>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppDirector />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
