import React from 'react'

const Bubbles = (props) => {
    // Bubbles array
  let bubbleNum = ["bubble-1", "bubble-2", "bubble-3", "bubble-4","bubble-5", "bubble-6", "bubble-7", "bubble-8"]
    // Generate bubbles
  const bubbles = bubbleNum.map((bubble, index) => {
    return <Bubble key={ index } id={ bubble }/>
  })

  return (
    <div className={`lake-bubble ${ props.data.class}`}>{ bubbles }</div>
  )
}
export default Bubbles
  // Bubbble DOM Element
const Bubble = ({ id }) => (
  <div id={ id } className="bubble"></div>
)