import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ButtonContainer } from "../styled-components/Button";

const LoginForm = props => {
  const [name, setName] = useState({
    username: "",
    password: ""
  });
  const changeHandler = event => {
    event.preventDefault();
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const login = e => {
    e.preventDefault();
    props.login(name.username, name.password).then(res => {
      if (res) {
        props.history.push("/protected");
      }
      props.setIsModalVisible(false);
    });
  };

  if (!props.isModalVisible) {
    document.body.style.overflow = "";
    return null;
  } else {
    document.body.style.overflow = "hidden";
    return (
      <div className="loginModal">
        <form
          className="login-modal"
          onSubmit={event => handleSubmit(event)}
          onKeyDown={props.closeLoginHandler2}
          tabIndex="0"
        >
          <h1 className="loginTitle">Welcome Back</h1>
          <p className="loginInputs">
            <label>
              Username:
              <input
                className="input-modal"
                type="text"
                name="username"
                onChange={changeHandler}
                value={name.username}
              />
            </label>
          </p>

          <p className="loginInputs">
            <label>
              Password:
              <input
                className="input-modal"
                type="password"
                name="password"
                onChange={changeHandler}
                value={name.password}
              />
            </label>
          </p>

          <ButtonContainer className="button-modal" onClick={login}>
            Login!
          </ButtonContainer>
          <p className="forgotText">Forgot username or password? Click here.</p>
        </form>
      </div>
    );
  }
};

export default withRouter(LoginForm);
