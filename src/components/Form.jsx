import React, { useContext, useState,useEffect } from 'react'
import TodoContext from '../context/TodoContext'

const Form = () => {

  const { saveTodo, edit, updateTodo } = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      updateTodo(edit.todo.id, text);
    } else {
      saveTodo(text);
    }
    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);


  
  return (
    <>
       <form onSubmit={handleSubmit}>
        <input type="text" className="form-control rounded-0 w-600" placeholder="Enter Todo Here..." onChange={(e) =>setText(e.target.value)}  required />
        <button className="btn btn-primary rounded-0 my-2 w-600 save">Save Todo</button>
      </form>
      
    </>
  )
}

export default Form
