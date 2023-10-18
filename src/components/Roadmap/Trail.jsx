import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const Trail = () => {
  return <section>
    <div className='container'>
      <Link to='/menu'>Menu</Link>
      <h1>Algoritmo</h1>
      <Card titulo="O Começo" subtitulo="Aprenda"/>
    </div>
  </section>
}

export default Trail