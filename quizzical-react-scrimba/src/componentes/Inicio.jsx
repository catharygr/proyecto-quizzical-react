import React from 'react'


export default function Inicio(props) {
  return (
    <div className='inicio flow'>
      <h1>Quizzical</h1>
      <p>Bienvenidos a Quizzical</p>
      <button onClick={props.iniciarQuiz} className='inicio--btn'>Start quiz</button>
    </div>
  )
}