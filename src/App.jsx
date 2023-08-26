import { useState } from 'react';
import { useMemo } from 'react';
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [dark , setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number]) 
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} /> <br />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  console.log('Calling slowFunction')
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}

export default App
