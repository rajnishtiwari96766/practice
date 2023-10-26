import React, { useState } from 'react'

const Logic = () => {
 const [value,setvalue]=useState('');
 const [message, setmessage] = useState([])

 const handleChange=(event)=>{

  setvalue(event.target.value); //this will set the final value as in the form of value
}

const handleClick=()=>{
  setmessage(value)
}

  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' placeholder='Enter the text' onChange={handleChange}/>
      <button onClick={handleClick}>➕</button>
     
      <div>
      {/* <p>{message}</p> */}
      {message.map((value)=>{
        return(
          <p>{message}</p>
        )
      })}
      </div>
    </div>
  )
}

export default Logic