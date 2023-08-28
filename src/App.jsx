import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'
import Todo from './Todo'

const ACTIONS = {
  ADD_TODO: 'add-todo'
}

function reducer (todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
  }
}

function  newTodo(value) {
  return { id: Date.now(), name: value, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  console.log(todos)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
      })}
    </>
  )
}

export default App
