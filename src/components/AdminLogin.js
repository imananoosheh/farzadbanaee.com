import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container } from "react-bootstrap";
import Music from "./Music";

const AdminLogin = () => {
  const inputStyle = {
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
  };
  // const [screen, setScreen] = useState("auth");
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();

  // const auth = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await axios.get("http://localhost:3001/authenticate", {
  //       auth: { username, password },
  //     });

  //     if (res.data.screen !== undefined) {
  //       setScreen(res.data.screen);
  //       if (res.data.screen === "admin") {console.log("screen == admin meaning cookie shoud be set",res.data);}
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const readCookie = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3001/read-cookie");

  //     if (res.data.screen !== undefined) {
  //       setScreen(res.data.screen);
  //     }
  //   } catch (e) {
  //     setScreen("auth");
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   readCookie();
  // }, []);

  // if there's no user, show the login form



  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    }).then((res) => console.log(res));
  };
  const getAdmin = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/admin",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };


  return (
    <>
      <div className="text-white m-5">
        <h1>Get Admin</h1>
        <button onClick={getAdmin}>go get</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "200px",
        }}
      >
        <div className="bg-dark text-white">
          <h3>Register Section</h3>
          <div className="input-group m-2">
            {/* <label htmlFor="username">Username</label> */}
            <div className="input-group-prepend" style={{ minWidth: "40px" }}>
              <div className="input-group-text">@</div>
            </div>
            <input
              style={inputStyle}
              type="text"
              placeholder="enter a username"
              onChange={({ target }) => setRegisterUsername(target.value)}
            />
          </div>

          <div className="input-group m-2">
            {/* <label htmlFor="password">password</label> */}
            <div className="input-group-prepend" style={{ minWidth: "40px" }}>
              <div className="input-group-text">#</div>
            </div>
            <input
              style={inputStyle}
              type="password"
              placeholder="enter a password"
              onChange={({ target }) => setRegisterPassword(target.value)}
            />
          </div>

          <button
            className="btn btn-dark m-2 border border-light border-1"
            type="submit"
            style={{ borderRadius: "3px" }}
            onClick={register}
          >
            Register
          </button>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "500px",
        }}
      >
        <div className="bg-dark text-white">
          <h3>Login Section</h3>
          <div className="input-group m-2">
            {/* <label htmlFor="username">Username</label> */}
            <div className="input-group-prepend" style={{ minWidth: "40px" }}>
              <div className="input-group-text">@</div>
            </div>
            <input
              style={inputStyle}
              type="text"
              placeholder="enter a username"
              onChange={({ target }) => setLoginUsername(target.value)}
            />
          </div>

          <div className="input-group m-2">
            {/* <label htmlFor="password">password</label> */}
            <div className="input-group-prepend" style={{ minWidth: "40px" }}>
              <div className="input-group-text">#</div>
            </div>
            <input
              style={inputStyle}
              type="password"
              placeholder="enter a password"
              onChange={({ target }) => setLoginPassword(target.value)}
            />
          </div>

          <button
            className="btn btn-dark m-2 border border-light border-1"
            type="submit"
            style={{ borderRadius: "3px" }}
            onClick={login}
          >
            Login
          </button>
        </div>
      </Container>
    </>
  );
};

export default AdminLogin;
