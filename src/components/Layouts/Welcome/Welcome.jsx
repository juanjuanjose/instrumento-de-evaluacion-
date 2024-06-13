import React from 'react'
import './Welcome.css'

export const Welcome = ({ ficha }) => {
  return (
    <>
      <div className='container'>
      <h1>instrumento de evaluación</h1>
      <h2>Ficha: {ficha} </h2>
      <a href='../Paint/Paint.jsx'>Ingresar</a>
      </div>
    </>
  )
}
