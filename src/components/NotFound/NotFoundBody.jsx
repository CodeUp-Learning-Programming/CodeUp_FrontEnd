import { React } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button"
import img404 from "../../assets/404.png"
import style from "./NotFoundBody.module.css";
const NotFoundBody = () => {

    const navigate = useNavigate()

    const navigateToPage = (path) => {
        navigate(path);
    }

    return (
        <main className={style.main}>
            <div className={style.centerText}>
                <img className={style.img} src={img404} alt="Texto 404" />
                <p className={style.texto}>Página não encontrada</p>
            </div>
            <div className={style.bottomText}>
                <Button setValue={() => navigateToPage(-1)} texto={"Voltar"} />
               
                <Button setValue={sessionStorage.nome ? () => navigateToPage("/menu") : () => navigateToPage("/login")} texto={sessionStorage.nome ? "Voltar para o menu" : "Fazer login"} />
            </div>
        </main>

    )


}

export default NotFoundBody;