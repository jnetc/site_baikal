import React from 'react'
import TransitionPage from '../components/transition-page/'
import { graphql } from 'gatsby'
import { CSSTransition } from 'react-transition-group'

import Background from '../components/background/'
import Navigator from '../components/navigation'

const Layout = (props) => {
  // console.log(props);
  console.log(props);

  
  const path =  props.location.pathname.split('/').splice(1, 1)[0];
  console.log(path);
  
  return (
    <React.Fragment>
      <TransitionPage props={ props }>
        { props.children }
      </TransitionPage>
      <Background/>
      { path === "vodka" &&  
         <Navigator 
          props={ props.data.allContentfulVodkaProduct.edges }/>}
      
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