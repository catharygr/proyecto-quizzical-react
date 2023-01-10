import React from 'react' 

export default function Pregunta({pregunta, respuestas, respCorrecta}) {
  const [formData, setFormData] = React.useState({respuesta: ''})

  function ManejarCambio(e) {
    const {name, value, type, checked} = e.target
      setFormData(oldForm => ({...oldForm, respuesta: checked}))
  }

  const radios = respuestas.map(resp => {
    return (
      <>
      <input 
        key={resp}  
        type="radio"
        id={resp}
        name='respuestas'
        value={resp} 
        onChange={ManejarCambio}
        checked={formData.respuesta === resp}
        />
        <label htmlFor={resp}>
          {resp}
        </label>
      </>
    ) 
  } )  
    

  return (
    <div className='pregunta'>
      <h3>{pregunta}</h3>
      <form action="">
        <fieldset className='pregunta--respuestas'>
          {radios}
        </fieldset>
      </form>
    </div>

  )
}