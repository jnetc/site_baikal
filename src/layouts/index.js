import React from 'react'
// import { graphql } from 'gatsby'

import TransitionPage from '../components/transition-page/'
import Background from '../components/background/'
import Navigation from '../components//navigation'
import Logo from '../components/logo'
import Contacts from '../components/contacts'

const Layout = (props) => {
    // Фильтруем по линку
  const path =  props.location.pathname.split('/').splice(1, 1)[0];
  return (
    <React.Fragment>
      { path === "vodka" && <Logo/> }
      { path === "vodka" && <Contacts/> }
      <TransitionPage props={ props }>
        { props.children }
      </TransitionPage>
      <Background/>
      { path === "vodka" && <Navigation/>}
    </React.Fragment>
  )
}
export default Layout

// export const query = graphql `
//   query {
//     allContentfulVodkaProduct {
//       edges {
//         node {
//           pageID
//         }
//       }
//     }
//   }
// `