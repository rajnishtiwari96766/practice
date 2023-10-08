import React from 'react'
import details from './data'

const Card = (props) => {
    return (
        <div>
            {details.map((val, index) => {
                return (
                    <div>
                        {val.title}
                        {val.image}
                        <button onClick={handleclick}>click me</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Card