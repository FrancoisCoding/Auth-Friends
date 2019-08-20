import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
