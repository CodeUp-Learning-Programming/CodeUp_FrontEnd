import { React } from "react";
import computador from "../../assets/Computador.png";
import style from "./BottomSectionHome.module.css";
export const BottomSectionHome = () => {

  return (
    <div className={style.background }>
    <section className={style.main + " container"}>
      <div className={style.titulo}>
        Uma maneira diferente de estudar
      </div>
      <div className={style.bottom}>
        <div className={style.box}>

          <div className={style.textBox}>
            <div className={style.tituloRoxo}>
              Gameficação
            </div>
            <div className={style.text}>
              Transforme o estudo em algo divertido, eficaz e cheio de conquistas ao longo da sua jornada.
            </div>
          </div>

          <div className={style.textBox}>
            <div className={style.tituloRosa}>
              Projetos
            </div>
            <div className={style.text}>
              Durante sua jornada na UP você fará projetos para consolidar o seu conhecimento e será dado todas as ferramentas para realizá-lo
            </div>
          </div>

        </div>

        <div className={style.box}>
          <img src={computador} alt="Notebook com a logo da Code Up" />
        </div>

        <div className={style.box}>

          <div className={style.textBox}>
            <div className={style.tituloLaranja}>
              Gratuidade
            </div>
            <div className={style.text}>
            Comece a estudar agora mesmo com o nosso plano gratuito.
            </div>
          </div>

          <div className={style.textBox}>
            <div className={style.tituloVerde}>
              Prática
            </div>
            <div className={style.text}>
            Evolua com muita prática para consolidar o conhecimento
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
  );
};
