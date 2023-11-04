import React from "react";
import logo from "../../assets/Codeup-big.png";
import { Link } from "react-router-dom";
import Button from "../Button";
import style from "./FooterHome.module.css";

export const FooterHome = () => {
  return (
    <footer className={style.footer}>
      <img src={logo} alt="Logo CodeUp" className={style.logo}/>
      <div className={style.footerMensagem}>
      Todos os direitos são reservados
      </div>
    </footer>
  );
};
