import React from 'react'
import Pregunta from './Pregunta'

export default function Quiz(props) {
    const [preguntaActuales,setPreguntaActuales] = React.useState(props.data.results)

  
  
  const preguntas = props.data.results.map(pregunta => {

    const respuestas = []
    respuestas.push(pregunta.correct_answer)
    pregunta.incorrect_answers.forEach(resp => respuestas.push(resp))
    //  Guardar indice actual con .lentgh
    let indexActual = respuestas.length 
    //Generar indice aleatorio
    let indexRandom = Math.floor(Math.random() * indexActual)
    // En loop iterar sobre el array hasta que el indice actual sea 0
    while(indexActual !== 0) {
      // Reducir indice actual por 1
      indexActual--
      // Guardar entrada en indice actual en una variable tempora
      const temporal = respuestas[indexActual]
      // Reasignar  entrada actual con la entrada aleatoria
      respuestas[indexActual] = respuestas[indexRandom]
      // Reasignar la entrada aleatoria por la actual
      respuestas[indexRandom] = temporal
    }


    console.log(respuestas)
    return (
      <Pregunta 
      key={pregunta.question}
      pregunta={pregunta.question}
      respuestas={respuestas}
      respCorrecta={pregunta.correct_answer}
      />
    )
  } )


  return (
    <div>
   {preguntas}
    </div>
  )
} 