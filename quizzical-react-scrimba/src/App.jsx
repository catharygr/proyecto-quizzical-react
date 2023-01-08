import React from 'react'
import Inicio from './componentes/Inicio'
import './App.css'
import Quiz from './componentes/Quiz'



function App() {
  const [inicio, setInicio] = React.useState(false)

  function iniciarQuiz() {
    setInicio(true)
  }





  return (
   
   inicio ?  <Quiz /> : <Inicio
   iniciarQuiz={iniciarQuiz}
   
   />
   
   
  )
}

export default App
