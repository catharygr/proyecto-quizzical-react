import React from 'react' 

export default function Pregunta({pregunta, respuestas, respCorrecta}) {
  const [form, setForm] = React.useState('')

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