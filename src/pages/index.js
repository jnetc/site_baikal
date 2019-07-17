import React from "react"
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
const Bold = ({ children }) => <span className="bold">{children}</span>
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
    const showAbout = () => {
      this.setState(({ show }) => ({
        show: !show
      }))
    }
    const hideAbout = () => {
      this.setState(({ show }) => ({
        show: !show
      }))
    }
    
    const { contentfulAsset, contentfulMainPage } = this.props.data
    console.log(contentfulMainPage);
    return (
      <>
        <Head/>
        <SEO title="Home" />
        <img id="logo-baikal" src={ contentfulAsset.file.url } alt="logo"/>
        <h1>{ contentfulMainPage.title }</h1>
        <p id="redirect">{ contentfulMainPage.question }</p>
        <div id="redirect-btns">
          <Link className="redirect-link yes" to="/vodka/">Kyllä</Link>
          <Link className="redirect-link no" to="/page-2/">En</Link>
        </div>
        <div id="show-about" onClick={ showAbout }>Baikalista</div>
        { this.state.show && 
          <div id="aboutPage">
            <div className="clouse-win" onClick={ hideAbout }></div>
            <pre id="main-about-site">{ documentToReactComponents( contentfulMainPage.aboutBaikal2.json, options )}</pre> 
          </div>
        }
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
      title,
      question,
      aboutBaikal2 {
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