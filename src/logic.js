import React, { useState } from 'react'

const Logic = () => {
 const [value,setvalue]=useState('');
 const [message, setmessage] = useState([])

 const handleChange=(event)=>{

  setvalue(event.target.value); //this will set the final value as in the form of value
}

const addValue=(event)=>{
  setmessage([...message,value]) //here the value is appended
  // event.preventDefault()
  setvalue('')
}

  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' placeholder='Enter the text' value={value} onChange={handleChange}/>
      <button onClick={addValue}>➕</button>
     
      <div>
      {message.map((val,index)=>{
        return(
          <ul>
            <li key={index}>{val}</li>
          </ul>
        )
      })}
      </div>
    </div>
  )
}

export default Logic