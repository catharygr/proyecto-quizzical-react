import React from 'react'

export default function Quiz() {

  const [data, setdata] = React.useState(() => {})

  React.useEffect(function() {
    fetch(' https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => console.log(data))
  },[])
  return (
    <h1>Quiz</h1>
  )
}