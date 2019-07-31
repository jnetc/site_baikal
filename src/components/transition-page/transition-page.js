import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './transition-page.scss'

const TransitionPage = ({ props }) => {
  console.log(props);
  
  const { location, children } = props
  const path =  location.pathname.split('/').splice(1, 1)[0];
  console.log(path);
  
  return (
    <TransitionGroup component={'main'} id={ path === "vodka" ? "vodka" : "" }>
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