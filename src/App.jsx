import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
    </>
  )
}

export default App
