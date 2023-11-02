import React from 'react'
import Content from './Content'
import style from './ExercicioGrid.module.css'
import MonacoEditor from '../Monaco/MonacoEditor'

const ExercicioGrid = () => {
  return (
    <div className={style.grid}>
      <Content classe={style.content}/>
      <MonacoEditor className={style.terminal}/>
    </div>
  )
}

export default ExercicioGrid

