import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pic from './components/Pic'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import { TodoProvider } from './context/TodoContext'



const App = () => {

  return (
    <>
      <TodoProvider>
      <Navbar/>
       <div className="container">
       <Form/>
       <ListGroup/>
  </div>
      </TodoProvider>
    </>
  )
}

export default App
