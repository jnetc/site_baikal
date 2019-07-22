import React from "react"
import { CSSTransition } from 'react-transition-group'
import { Link } from "gatsby"
import SEO from "../components/seo"
import './index.scss'
import Head from '../components/head'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


import { graphql } from 'gatsby'

  // Options for "RICH TEXT"
const Bold = ({ children }) => <b>{children}</b>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}


class IndexPage extends React.Component {
  state = {
    show: false
  }
  render() {
      // Show about page
    const showAbout = () => {
      this.setState(({ show }) => ({
        show: !show
      }))
    }    
      // Hide about page
    const hideAbout = () => {
      this.setState(({ show }) => ({
        show: !show
      }))
    }
  
    const { title, question, aboutBaikal, logo } = this.props.data.contentfulMainPage
    
    return (
      <>
        <Head/>
        <SEO title="Home" />
        <img id="logo-baikal" src={ logo.file.url } alt="logo"/>
        <h1>{ title }</h1>
        <p id="redirect">{ question }</p>
        <div id="redirect-btns">
          <Link className="redirect-link yes" to="/vodka/">Kyllä</Link>
          <Link className="redirect-link no" to="/limsa/">En</Link>
        </div>
        <div id="show-about" onClick={ showAbout }>Baikalista</div>
        <CSSTransition
          in={ this.state.show }
          timeout={ 500 }
          className="aboutPage_show"
          unmountOnExit>
          <div id="aboutPage" >
            <div className="clouse-win" onClick={ hideAbout }></div>
            <div id="scrolleble" >
            <pre id="main-about-site">{ documentToReactComponents( aboutBaikal.json, options )}</pre> 
            </div>
          </div>
        </CSSTransition>
      </>
    )
  }
  
}


export default IndexPage

  // GRAPHiQL schema for content
  // CONTENTFUL select "rich text"
  // aboutBaikal fetch lika json 
export const MainPageQuery = graphql `
query {
  contentfulMainPage {
    title
    question
    aboutBaikal {
      json
    }
    logo {
      file {
        url
      }
    }
  }
}
`