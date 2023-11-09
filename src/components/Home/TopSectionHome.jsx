import { React, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { USER_CADASTRO, USER_LOGIN } from "../../api.jsx";
import Button from "../Button.jsx";
import Not from "../../assets/Not.png";
import style from "./TopSectionHome.module.css";
export const TopSectionHome = () => {

const [mensagem, setMensagem] = useState("");

const navigate = useNavigate();

var cookie = true

// function criarCookie(nome, valor) {
//   document.cookie = `${nome}=${valor}; path=/`;
// }

// criarCookie("meuCookie", "MeuValor");

// function getCookie(nomeCookie) {
//   const valor = document.cookie.match(new RegExp('(^| )' + nomeCookie + '=([^;]+)'));
//   if (valor) return valor[2];
//   return null;
// }

async function cadastrar() {
  const{url,options} = USER_CADASTRO ({
    email:"tempUser@tempmail.com",
    senha:"tempUser",
    nome:"tempUser",
    "dtNascimento":"2000-01-01"
  })

  const response = await fetch(url, options);
  if(response.ok){
    var data = await response.json();
    sessionStorage.setItem("tempMail", data.email)
    setTimeout(() => {
      login()
    }, 1000);
    console.log(data)
  }
}

async function login() {

  const{url,options} = USER_LOGIN ({
    email: sessionStorage.tempMail,
    senha: "tempUser"
  })

  const response = await fetch(url, options);
  if(response.ok){
    console.log(response)
    const data = await response.json();
    sessionStorage.setItem('id', data.id); 
    sessionStorage.setItem('nome', data.nome); 
    sessionStorage.setItem('email', data.email); 
    sessionStorage.setItem('tokenBearer', data.token); 
    setTimeout(() => {
      navigate('/menu');
    }, 1000);
  }
}

  return (
    <section className={style.main + " container"}>
      <div className={style.leftBox}>
        <div className={style.titulo}>
            Aprenda programação e desbloqueie suas habilidades!
        </div>
        <div className={style.button}>
         <Button setValue={cadastrar} texto={`${cookie ? "Continue de onde parou!" : "Comece agora sem cadastro!"}`}/>
        </div>
      </div>
      <img src={Not} alt="Logo CodeUp" className = {style.img}/>
    </section>
  
  );
};
