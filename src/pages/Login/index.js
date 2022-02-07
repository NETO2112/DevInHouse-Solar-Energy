import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLogin from "../../components/InputLogin";
import Logo from "../../components/Logo";
import { ButtonLogin, ContainerImage, ContainerLogin, LoginImage } from "./styles";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let currentErrors = {};
    if (!email) {
      currentErrors.email = 'Email é obrigatório';
    }
    if (!password) {
      currentErrors.password = 'Senha é obrigatória';
    }
    setErrors(currentErrors);

    if (!email || !password) {
      return
    } else {
      navigate('/unidades')
    }
  }

  return (
    <>
      <ContainerImage>
        <LoginImage
          src="https://cdn.pixabay.com/photo/2012/03/03/23/11/alternative-21581_960_720.jpg"
          alt="solar_panel"
        />
      </ContainerImage>
      <ContainerLogin onSubmit={handleSubmit}>
        <Logo width="250px" />
        <h3>Seja bem vindo</h3>
        <InputLogin
          type="email" 
          value={email}
          placeholder="E-mail"
          errorMessage={errors.email}
          marginBottom="20px"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <InputLogin
          type="password" 
          value={password}
          placeholder="Senha"
          errorMessage={errors.password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <ButtonLogin type="submit">Entrar</ButtonLogin>
      </ContainerLogin>
    </>
  )
};

export default Login;