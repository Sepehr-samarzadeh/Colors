import React from 'react'

const Content = ({ colorValue, isDarkText}) => {
  return (
   <section className='square' style={{ 
    backgroundColor: colorValue,
    color: isDarkText ? "#000" : "#FFF"}}>
    <p>{colorValue ? colorValue : "Empty Value"}</p>
   </section>
  )
}
Content.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Content