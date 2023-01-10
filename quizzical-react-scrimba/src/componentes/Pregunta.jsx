import React from 'react' 

export default function Pregunta({pregunta, respuestas}) {
  const radios = respuestas.map(resp => <p key={resp}>{resp}</p> )

  return (
    <div className='pregunta'>
    <h3>{pregunta}</h3>
    <div className='pregunta--respuestas'>
    {radios}
    </div>
    </div>

  )
}