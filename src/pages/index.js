import React from "react"
import { CSSTransition } from 'react-transition-group'
import { Link } from "gatsby"
import SEO from "../components/seo"
import './index.scss'
import Head from '../components/head'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


import { graphql } from 'gatsby'

// const IndexPage = () => {
//   const data = useStaticQuery(graphql `
//     query {
//       contentfulMainPage {
//         title,
//         question,
//         aboutBaikal {
//           aboutBaikal
//         }
//       }
//       contentfulAsset {
//         file {
//           url
//         }
//       }
//     }
//   `)
//   console.log(data);
  
//   const { title, question, aboutBaikal } = data.contentfulMainPage
//   const checkAbout = (e) => {
//     return e.target.checked
//   }
  
//   return (
//     <>
//       <Head/>
//       <SEO title="Home" />
//       <img id="logo-baikal" src={ data.contentfulAsset.file.url } alt="logo"/>
//       <h1>{ title }</h1>
//       <p id="redirect">{ question }</p>
//       <div id="redirect-btns">
//         <Link className="redirect-link yes" to="/vodka/">Kyllä</Link>
//         <Link className="redirect-link no" to="/page-2/">En</Link>
//       </div>
//       <label id="show-about">Baikalista
//         <input id="checkAbout" onChange={ checkAbout } type="checkbox"/>
//       </label>
//       {/* <p id="main-about-site">{ aboutBaikal.aboutBaikal }</p> */}

//     </>
//   )
// }

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

    console.log(this.state.height);
    
      // Hide about pahe
    const hideAbout = () => {
      this.setState(({ show }) => ({
        show: !show
      }))
    }
  
    const { contentfulAsset, contentfulMainPage } = this.props.data
    
    return (
      <>
        <Head/>
        <SEO title="Home" />
        <img id="logo-baikal" src={ contentfulAsset.file.url } alt="logo"/>
        <h1>{ contentfulMainPage.title }</h1>
        <p id="redirect">{ contentfulMainPage.question }</p>
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
            <pre id="main-about-site">{ documentToReactComponents( contentfulMainPage.aboutBaikal.json, options )}</pre> 
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
    }
    contentfulAsset {
      file {
        url
      }
    }
  }
`