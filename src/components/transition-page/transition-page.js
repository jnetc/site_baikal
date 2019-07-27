import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './transition-page.scss'

const TransitionPage = ({ props }) => {
  const { location, children } = props  
  return (
    <TransitionGroup component={'main'}>
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