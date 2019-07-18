import React from 'react'
import TransitionPage from '../components/transition-page/'
import Background from '../components/background/'

const Layout = (props) => {
  return (
    <React.Fragment>
      <TransitionPage props={ props }>
        { props.children }
      </TransitionPage>
      <Background/>
    </React.Fragment>
   
  )
}

export default Layout