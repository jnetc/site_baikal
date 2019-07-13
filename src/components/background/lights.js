import React from 'react'

const Lights = () => {
    // Lights array
  let lightNum = ["light-1", "light-2", "light-3", "light-4","light-5", "light-6", "light-7", "light-8", "light-9", "light-10", "light-11", "light-12", "light-13", "light-14", "light-15"]
    // Generate lights
  const lights = lightNum.map((light, index) => {
    return <Light key={ index } id={ light }/>
  })

  return (
    <div className="lake-light">{ lights }</div>
  )
}
export default Lights

  //Light DOM Element
const Light = ({ id }) => (
  <div id={ id } className="light"></div>
)