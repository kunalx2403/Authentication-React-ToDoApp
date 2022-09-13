//rfce text

import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {
   const [input, setInput] = useState(props.edit ? props.edit.value : "");

   //useEffect and useRef hooks

   const inputRef = useRef(null);
   useEffect(() => {
      inputRef.current.focus();
   })

   function handleChange(event) {
      setInput(event.target.value);
   }

   function handleSubmit(event) {

      props.onSubmit({                            //props here refers to the function prop "onSubmit"
         id: uuidv4(),
         text: input
      })

      setInput("");

      event.preventDefault();
   }

   return (
      <form className='todo-form' onSubmit={handleSubmit}>
         {props.edit ? (
            <><input type="text" placeholder="Update your item" value={input} name="text" className='todo-input edit' onChange={handleChange} ref={inputRef} />
               <button className='todo-button edit'>Update</button></>
         ) : (
            <><input type="text" placeholder="Add a todo" value={input} name="text" className='todo-input' onChange={handleChange} ref={inputRef} />
               <button className='todo-button'>Add todo</button></>
         )}

      </form>
   )
}

export default TodoForm;