import React from 'react'
import style from './Button.module.css'

const Button = ({texto, value, setValue, type}) => {
  return (
    type && value == "equipado"?
    <button 
    className={style.buttonEquipado}
    onClick={() => {
      setValue()
    }}
    >
      <p>{texto}</p>
    </button>
    : type && value == "equipar"? 
    
    <button 
    className={style.button + " " + style.buttonEquipar + " " + style.e}
    onClick={() => {
      setValue()
    }}
    >
      <p>{texto}</p>
    </button>
    
    : type ? 
     
    <button 
    className={style.button + " " + style.buttonMain}
    onClick={() => {
      setValue()
    }}
    >
      <p>{texto}</p>
    </button> :

    <button 
    className={style.button}
    onClick={() => {
      setValue()
    }}
    >
      <p>{texto}</p>
    </button> 
    
  )
}

export default Button
