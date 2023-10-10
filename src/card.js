import React from 'react'
import details from './data'

const Card = () => {
  const handleClick=()=>{
    window.open('https://www.netflix.com/watch/80205342?trackId=255824129')
  }
  return (
   <>
        {
        details.map((val,index)=>(
          <div key={index}>
            <p>{val.name}</p>
            <img src={val.image}></img>
            {/* <a href={val.link}><button>click me</button></a> */}
            <button onClick={handleClick}>Click me</button>
          </div>
        )
        )
        }
   </>
   
  )
}

export default Card