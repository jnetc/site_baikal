import React from 'react'
import TransitionPage from '../components/transition-page/'
import Background from '../components/background/'
import Navigation from '../components//navigation'

const Layout = (props) => {
    // Фильтруем по линку
  const path =  props.location.pathname.split('/').splice(1, 1)[0];

  return (
    <React.Fragment>
      <TransitionPage props={ props }>
        { props.children }
      </TransitionPage>
      <Background/>
      {/* { path === "vodka" && <Navigation/> }   */}
    </React.Fragment>
  )
}
export default Layout