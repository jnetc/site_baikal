import React from 'react'
import TransitionPage from '../components/transition-page/'
import { graphql } from 'gatsby'

import Background from '../components/background/'
import Navigator from '../components/navigation'

const Layout = (props) => {

  console.log(props);
  return (
    <React.Fragment>
      <TransitionPage props={ props }>
        { props.children }
      </TransitionPage>
      <Background/>
      { props.data.allContentfulVodkaProduct !== undefined &&  
         <Navigator props={ props.data.allContentfulVodkaProduct.edges }/>}
    </React.Fragment>
  )
}
export default Layout

export const query = graphql `
  query {
    allContentfulVodkaProduct {
      edges {
        node {
          pageID
        }
      }
    }
  }
`