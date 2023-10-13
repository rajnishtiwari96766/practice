import React from 'react'
import details from './data'

const App = (props) => {
  
  return (
    <div>
      {
        details.map((val, index) => {
          if (val.x === val.y && val.y === val.z) {
            return (
              <p>Matching</p>,
              
            )
          }
          else {
            return(
              <p>Not matching</p>
            )
          }

          return({props.x})
        },
        )
      }

    </div>
  )
}

export default App