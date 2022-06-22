import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
  
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-macena-hopper/login";
    const body = {
      email: email,
      password: password
    };

    axios
      .post(URL, body)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/:id");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <>
    <h1><u>Login Page</u></h1>
    <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Enviar</button>
      <Header/>
    </>
  );
};

export default LoginPage;