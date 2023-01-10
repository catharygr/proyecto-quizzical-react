import React from 'react'
import Inicio from './componentes/Inicio'
import './App.css'
import Quiz from './componentes/Quiz'



function App() {
  const [inicio, setInicio] = React.useState(false)
  const [data, setdata] = React.useState({})

  React.useEffect(function() {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => setdata(oldData => oldData = {...data} ))
  },[])

  function iniciarQuiz() {
    setInicio(true)
  }





  return (
   
   inicio ?  <Quiz 
      data={data}
   /> : <Inicio
      iniciarQuiz={iniciarQuiz}
  
   
   />
   
   
  )
}

export default App
