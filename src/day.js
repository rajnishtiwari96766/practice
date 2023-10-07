import React from 'react'

const Day = () => {
  const time=new Date();
  const current=time.getHours();

  if(current >3){
    return <span>abc</span>
  }else if(current<3){
    return <span> def</span>
  }
}

export default Day