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
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </React.Fragment>
   
  )
}

export default Layout