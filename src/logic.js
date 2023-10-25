import React, { useState } from 'react'

const Logic = () => {
 const [value,setvalue]=useState('');

 const handleChange=(event)=>{
  setvalue(event.target.value); //this will set the final value as in the form of value
 }

 const handleClick=(event)=>{
   <p>{value}</p>
 }
  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' placeholder='Enter the text' onChange={handleChange}/>
      <button onClick={handleClick}>➕</button>
    </div>
  )
}

export default Logic