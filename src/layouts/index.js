import React from 'react'
import TransitionPage from '../components/transition-page/'
import Background from '../components/background/'
import Contacts from '../components/contacts'
  // Стили для иконок
import '../../static/css/fontello.css'

const Layout = (props) => {
    // Фильтруем по линку
  const pathval =  props.path.split('/').splice(1, 1)[0];
  console.log(pathval);
  
  return (
    <React.Fragment>
      <Contacts path={ props.path }/>
      <TransitionPage props={ props }>
        { props.children }
      </TransitionPage>
      <Background path={ pathval }/>
    </React.Fragment>
  )
}
export default Layout