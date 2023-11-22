import React from 'react';
import style from './LojaOptions.module.css';
import moeda from '../../assets/moeda.svg'
import astronauta from '../../assets/Loja/astronauta.jpeg';
import blackcat from '../../assets/Loja/black-cat.jpg';
import candy from '../../assets/Loja/candy.jpg';
import castelo from '../../assets/Loja/castelo.jpeg';
import castelo2 from '../../assets/Loja/castelo2.jpeg';
import ghost from '../../assets/Loja/ghost.jpg';
import girl from '../../assets/Loja/girl.jpeg';
import halloween from '../../assets/Loja/halloween.jpg';
import house from '../../assets/Loja/house.jpeg';
import penguim from '../../assets/Loja/penguim.jpeg';
import reuniao from '../../assets/Loja/reuniao.jpeg';
import rio from '../../assets/Loja/rio.jpeg';
import robot from '../../assets/Loja/robot.jpeg';
import Button from '../Button';

export const LojaOptions = () => {
  return (
    <section className={style.bg}>
        
        <div className={style.modalContainer}>
            <div className={style.modal}>
                <img src={astronauta} alt="Astronauta" />
                <h1>Deseja comprar esse icone?</h1>
                <div className={style.precoModal}>
                    <p className={style.precoModalTexto}>20</p>
                    <img src={moeda} alt="" />
                </div>
                <Button texto="Comprar"/>
            </div>
        </div>

        <div className={style.grid + " container"}>
            <div className={style.navLoja}>
                <h1>Loja</h1>
                <nav>
                    <p className={style.active}>Icones</p>
                    <p>Avatares</p>
                    <p>Skins</p>
                </nav>
            </div>
            <div className={style.gridCard}>
                <div className={style.card}>
                    <img src={astronauta} alt="Astronauta" />
                    <p>Astronauta</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={blackcat} alt="Gato preto" />
                    <p>Gato Preto</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={candy} alt="Doces" />
                    <p>Doces</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={astronauta} alt="Astronauta" />
                    <p>Astronauta</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={astronauta} alt="Astronauta" />
                    <p>Astronauta</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={astronauta} alt="Astronauta" />
                    <p>Astronauta</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={astronauta} alt="Astronauta" />
                    <p>Astronauta</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={astronauta} alt="Astronauta" />
                    <p>Astronauta</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={astronauta} alt="Astronauta" />
                    <p>Astronauta</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={astronauta} alt="Astronauta" />
                    <p>Astronauta</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
                <div className={style.card}>
                    <img src={astronauta} alt="Astronauta" />
                    <p>Astronauta</p>
                    <div className={style.preco}>
                        <p>20</p>
                        <img src={moeda} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
