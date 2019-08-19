import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './transition-page.scss'

const TransitionPage = ({ props }) => {
  
  const { location, children } = props
  const path =  location.pathname.split('/').splice(1, 1)[0];

  return (
    <TransitionGroup component={'main'} id={ path === "limsa" ? "limsa" : "vodka" }>
      <CSSTransition
        key={ location.pathname }
        timeout={ 500 }
        classNames="transition-page"
        unmountOnExit>
          <div>{ children }</div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default TransitionPage

