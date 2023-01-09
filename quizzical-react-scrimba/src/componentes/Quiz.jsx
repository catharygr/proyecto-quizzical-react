import React from 'react'
import Pregunta from './Pregunta'

export default function Quiz(props) {

  
  const preguntas = props.data.results.map(pregunta => {
    const respuesta = []
    respuesta.push(pregunta.correct_answer)
    pregunta.incorrect_answers.forEach(resp => respuesta.push(resp))
    console.log(respuesta)
    return (
      <Pregunta 
      pregunta={pregunta.question}
      />
    )
  } )


  return (
    <div>
   {preguntas}
    </div>
  )
} 