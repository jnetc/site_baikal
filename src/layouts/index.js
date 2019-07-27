import React from 'react'
import TransitionPage from '../components/transition-page/'

import Background from '../components/background/'
import Navigation from '../components//navigation'
import Logo from '../components/logo'

const Layout = (props) => {

  const path =  props.location.pathname.split('/').splice(1, 1)[0];
  
  return (
    <React.Fragment>
      { path === "vodka" && <Logo/> }
      <TransitionPage props={ props }>
        { props.children }
      </TransitionPage>
      <Background/>
      { path === "vodka" && <Navigation/>}
    </React.Fragment>
  )
}
export default Layout