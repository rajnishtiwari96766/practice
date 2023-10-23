import React, { useState } from 'react'

const Logic = () => {
    const [initial,final]=useState(0)
  return (
    <div>
        <button onClick={()=> final(initial+1)}>Increment</button>
        <button onClick={()=> final(initial-1)} disabled={initial===0}>decrement</button>
        <button onClick={()=> final(0)} disabled={initial===0}>Reset</button>
        <p> button clicked {initial} times</p>
    </div>
  )
}

export default Logic