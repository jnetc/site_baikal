import React from 'react'
import { Link } from 'gatsby'

const VodkaNav = (props) => {
    // Кол-во кнопок на продукцию
  console.log(props);
  const buttons = props.props.map(btn => {    
    return <Link 
              key={ btn.node.pageID }
              to={`/vodka/${ btn.node.pageID }`} 
              activeClassName="vodka-selected"
              className={`vodka-btn icon-${ btn.node.pageID }`}>
            </Link>
  })
  return (
      <>
        { props.children }
        <div id="nav-vodka">
          { buttons }
        </div>
      </>
  )
}

export default VodkaNav