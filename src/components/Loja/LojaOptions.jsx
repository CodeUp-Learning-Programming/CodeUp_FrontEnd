import React, { useState, useEffect } from 'react';
import style from './LojaOptions.module.css';
import moeda from '../../assets/moeda.svg'
import astronauta from '../../assets/Loja/astronauta.jpeg';
import { BUSCAR_ITENS_LOJA, COMPRAR_ITEM_LOJA, EQUIPAR_ITEM_ADQUIRIDO, USER_ATUALIZAR } from '../../api';
import Button from '../Button';
import { func } from 'prop-types';

export const LojaOptions = () => {

    const [loja, setLoja] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [itemModal, setItemModal] = useState('null');
    async function buscarConteudoLoja() {
        const { url, options } = BUSCAR_ITENS_LOJA(sessionStorage.tokenBearer);
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            console.log("Aqui está o os items da loja: ", data);
            setLoja(data);
        }
    }

    // async function atualizarInformacoes() {
    //     const { url, options } = USER_ATUALIZAR(sessionStorage.tokenBearer, sessionStorage.id);
    //     const response = await fetch(url, options);
    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log(data);
    //         sessionStorage.setItem('nivel', data.nivel ?? 0);
    //         sessionStorage.setItem('moedas', data.moedas ?? 0);
    //         sessionStorage.setItem('xp', data.xp ?? 0);
    //         const itensAdquiridos = JSON.stringify(data.itensAdquiridos);
    //         sessionStorage.setItem('itensAdquiridos', itensAdquiridos);
    //     } else {
    //         console.log("Moedas Insuficientes!")
    //     }
    // }


    async function comprarItem(id) {
        const { url, options } = COMPRAR_ITEM_LOJA(sessionStorage.tokenBearer, id);
        const response = await fetch(url, options);
        if (response.ok) {
            //atualizarInformacoes();
            const data = await response.json();
            console.log(data)
            sessionStorage.setItem('nivel', data.nivel ?? 0);
            sessionStorage.setItem('moedas', data.moedas ?? 0);
            sessionStorage.setItem('xp', data.xp ?? 0);
            const itensAdquiridos = JSON.stringify(data.itensAdquiridos);
            sessionStorage.setItem('itensAdquiridos', itensAdquiridos);
            console.log("Item comprado com sucesso!")
            setMostrarModal(false);
            buscarConteudoLoja()

        }else{
            console.log("Moedas Insuficientes!")

        }

    }

    async function equiparItem(novaFoto) {
        const { url, options } = EQUIPAR_ITEM_ADQUIRIDO(sessionStorage.tokenBearer,{
            "image": novaFoto
          })
        const response = await fetch(url, options);
        if (response.ok) {
            sessionStorage.setItem('fotoPerfil', novaFoto);
            console.log("foto alterada")
            console.log(response)
        }
    }


    useEffect(() => {
        buscarConteudoLoja();
    }, []);

    useEffect(() => {
        const fecharModalForaDoModal = (event) => {
            const modalContainer = document.querySelector(`.${style.modalContainer}`);
            if (modalContainer && !modalContainer.contains(event.target)) {
                setMostrarModal(false);
            }
        };

        if (mostrarModal) {
            document.addEventListener('click', fecharModalForaDoModal);
        }

        return () => {
            document.removeEventListener('click', fecharModalForaDoModal);
        };
    }, [mostrarModal]);

    const abrirModal = (event, item) => {
        event.stopPropagation();
        setMostrarModal(true);
        setItemModal(item);
    };



    return (
        <section className={style.bg}>

            <div className={style.modalContainer}>
                <div className={style.modal} style={{ display: mostrarModal ? 'flex' : 'none' }}>
                    <img src={itemModal.fotoItem} alt={itemModal.descricaoItem} />
                    <h1>Deseja comprar este item?</h1>
                    <h1>{itemModal.nomeItem}</h1>
                    <div className={style.precoModal}>
                        <p className={style.precoModalTexto}>{itemModal.precoItem}</p>
                        <img src={moeda} alt="" />
                    </div>
                    <Button texto="Comprar" type={true} value={"equipar"} setValue={() => comprarItem(itemModal.id)} />
                </div>
            </div>

            <div className={style.grid + " container"}>
                <div className={style.navLoja}>
                    <h1>Loja</h1>
                    <nav>
                        <p className={style.active}>Imagens</p>
                      
                    </nav>
                </div>

                <div className={style.gridCard}>
                    {loja.itensLoja?.map((itemLoja, index) => (
                        itemLoja.tipoItem === "Foto de Perfil" && (
                        <div className={style.card} key={index} onClick={itemLoja.adquirido ? () => console.log("item já adquirido") : (event) => abrirModal(event, itemLoja)}>
                            <img src={itemLoja.fotoItem} alt={`${itemLoja.descricaoItem}`} />
                            <p>{itemLoja.nomeItem}</p>
                            <div className={style.preco} style={{ display: itemLoja.adquirido ? 'none' : 'flex' }}>
                                <p>{itemLoja.precoItem}</p>
                                <img src={moeda} alt="" />
                            </div>
                            <div className={style.preco} style={{ display: itemLoja.adquirido ? 'flex' : 'none' }}>
                                <div className={style.buttonEquipar}>
                                    <Button type={true} value={"equipar"} texto={"Equipar"} setValue={() => equiparItem(itemLoja.fotoItem)} />
                                </div>
                            </div>
                        </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}
