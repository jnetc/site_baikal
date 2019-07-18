import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './transition-page.scss'

const TransitionPage = ({ props }) => {
  const { location } = props
  
  return (
    <TransitionGroup component={'main'}>
      <CSSTransition
        key={ location.pathname }
        timeout={ 200 }
        classNames="transition-page"
        unmountOnExit>
          <div>{ props.children }</div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default TransitionPage