import React from 'react'

const Fishes = (props) => {
    // Fishes array
  let fishNum = ["fish-1", "fish-2", "fish-3", "fish-4","fish-5", "fish-6", "fish-7", "fish-8"]
    // Generate fishes
  const fishes = fishNum.map((fish, index) => {    
    if (props.data.class === 'fl2' && index < 2) {
      return <Fish key={ index } id={ fish }/>
    }
    if (props.data.class === 'fl3' && index < 4) {
      return <Fish key={ index } id={ fish }/>
    }
    return props.data.class === 'fl1'&& <Fish key={ index } id={ fish }/>
  })
  return (
    <div className={`lake-fishes ${ props.data.class}`}>{ fishes }</div>
  )
}
export default Fishes
  // Fish DOM Element
const Fish = ({ id }) => (
  <i id={ id } className="icon-fish"></i>
)