import React from 'react'
import { CSSTransition } from  'react-transition-group'
import TransitionPage from '../components/transition-page/'
import Background from '../components/background/'
import Navigation from '../components//navigation'
import Contacts from '../components/contacts'

const Layout = (props) => {
    // Фильтруем по линку
  const path =  props.location.pathname.split('/').splice(1, 1)[0];

  return (
    <React.Fragment>
      <TransitionPage props={ props }>
        { props.children }
      </TransitionPage>
      <Background/>
      <CSSTransition
        in={ path === "vodka" }
        timeout={ 500 }>
          <Contacts/> 
      </CSSTransition>
          <Navigation/>
    </React.Fragment>
  )
}
export default Layout