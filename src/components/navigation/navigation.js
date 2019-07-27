import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Navigation = (props) => {
    // Кол-во кнопок на продукцию
    const data = useStaticQuery(graphql `
      query {
        allContentfulVodkaProduct {
          edges {
            node {
              pageID
            }
          }
        }
      }
    `)
  const { edges } = data.allContentfulVodkaProduct
  const buttons = edges.map(btn => {    
    return <Link 
              key={ btn.node.pageID }
              to={`/vodka/${ btn.node.pageID }`} 
              activeClassName="vodka-selected"
              className={`vodka-btn icon-${ btn.node.pageID }`}>
            </Link>
  })
  return (
      <>
        <div 
          id="nav-vodka" 
          style={{ zIndex: "500"}}>
            { buttons }
        </div>
      </>
  )
}

export default Navigation