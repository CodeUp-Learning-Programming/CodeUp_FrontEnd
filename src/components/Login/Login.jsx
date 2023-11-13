import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { USER_CADASTRO, USER_LOGIN } from "../../api";
import logo from "../../assets/Codeup-big.png";
import Button from "../Button";
import Input from "../Input";
import styles from "./Login.module.css";

const Login = () => {
  /* Login */
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const [loginCadastro, setLoginCadastro] = React.useState(false);

  /* Cadastro */
  const [nome, setNome] = React.useState("");
  const [dataNasc, setDataNasc] = React.useState("");

  function mudarDiv(){
    setLoginCadastro(!loginCadastro)
  }

  const navigate = useNavigate();

  async function login() {
    
    const{url,options} = USER_LOGIN ({
      email,
      senha
    })

    const response = await fetch(url, options);
    if(response.ok){
      const data = await response.json();
      console.log(data)
      sessionStorage.setItem('id', data.id); 
      sessionStorage.setItem('nome', data.nome); 
      sessionStorage.setItem('email', data.email); 
      sessionStorage.setItem('moedas', data.moedas ? data.moedas : 0); 
      sessionStorage.setItem('tokenBearer', data.token); 
      setTimeout(() => {
        navigate('/menu');
      }, 1000);
    }
    
  }
  async function cadastrar() {
    const{url,options} = USER_CADASTRO ({
      email,
      senha,
      nome,
      "dtNascimento":dataNasc
    })

    const response = await fetch(url, options);
    if(response.ok){
      login()
      console.log(response)
    }else{
      console.log(response)
    }
  }

  return (
    <>
      <nav className={styles.container + " " + styles.nav}>
        <Link className={styles.link} to="/">
          Voltar
        </Link>
        <img className={styles.logo} src={logo} alt="Logo CodeUp" />
        <span></span>
      </nav>

      <section className={styles.container + " " + styles.containerLogin}>
        {/* Login */}
        {loginCadastro && (
          <div className={styles.login}>
            <h1 className={styles.titulo}>Login</h1>
            <div>
              <Input
                className={styles.input}
                label="Email"
                id="email"
                type="text"
                value={email}
                setValue={setEmail}
              />

              <Input
                className={styles.input2}
                label="Senha"
                id="senha"
                type="password"
                value={senha}
                setValue={setSenha}
              />
              <Button texto="Entrar" className={styles.button} setValue={login}/>
            </div>
          </div>
        )}
        {/* Div intermediária */}
        <div className={styles.preCadastro}>
          {loginCadastro ? 
          <>
            <p className={styles.p}>Não tem conta ainda?</p>
            <Button
              className={styles.button}
              texto="Cadastre-se"
              value={loginCadastro}
              setValue={mudarDiv}
            />
          </> : <>
            <p className={styles.p}>Já tem conta?</p>
            <Button
              className={styles.button}
              texto="Entrar"
              value={loginCadastro}
              setValue={mudarDiv}
            />
          </>}

          
        </div>
        {/* Cadastro */}
        {!loginCadastro && (
          <div className={styles.login}>
            <h1 className={styles.titulo}>Cadastre-se</h1>
            <div>
              <Input
                className={styles.input}
                label="Nome"
                id="nome"
                type="text"
                value={nome}
                setValue={setNome}
              />

              <Input
                className={styles.input + " " + styles.date}
                label="Data de Nascimento"
                id="nome"
                type="date"
                value={dataNasc}
                setValue={setDataNasc}
              />
              <Input
                className={styles.input}
                label="Email"
                id="email"
                type="text"
                value={email}
                setValue={setEmail}
              />

              <Input
                className={styles.input2}
                label="Senha"
                id="senha"
                type="password"
                value={senha}
                setValue={setSenha}
              />
              <Button texto="Cadastre-se" className={styles.button} setValue={cadastrar} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Login;
