import React from "react"
import SEO from "../components/seo"
import Head from '../components/head'
import { Link, graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


  // Options for "RICH TEXT"
const Bold = ({ children }) => <b>{children}</b>
const Text = ({ children }) => <p id="about-vodka" className="align-center">{children}</p>
// Options for "RICH TEXT"
const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}
  

const mainVodka = (props) => {
    // Содержание страницы
  const { vodka_logo, question_vodka, question_vodka2, about_vodka_txt } = props.data.contentfulVodkaMain
  const { edges } = props.data.allContentfulVodkaProduct
  const buttons = edges.map(btn => {
    const removeOriginal = btn.node.vodka_name.split('®').join('').trim()
    // const removeOriginal = btn.node.vodka_name.split('®').pop().trim()
      
    return <Link 
              key={ btn.node.pageID }
              to={`/vodka/${ btn.node.pageID }`} 
              activeClassName="vodka-selected"
              className="vodka-btn"
              style={{ order: `${ btn.node.btn_order }`}}
              title={ btn.node.vodka_name }>
              <p>{ removeOriginal }</p>
              <span></span>
            </Link>
  })
    

  // const listOfNames = edges.map(item => {
  //   return <li key={ item.node.pageID }><i className={`icon-${item.node.pageID}`}></i><span>{item.node.vodka_name}</span></li>
  // })
  return (
    <>
      <Head/>
      <SEO title="Page two" />
        
        <img id="vodka-main-logo" src={ vodka_logo.file.url } alt="logo"/>
        { documentToReactComponents(about_vodka_txt.json, options) }
        <h5 id="q-selection-v">{ question_vodka }</h5>
        <h5 id="q-selection-v2">{ question_vodka2 }</h5>
        <ul id="main-select-items">
          { buttons }
        </ul>
    </>
  )
}
export default mainVodka

  // GraphQl
  // ЗДЕСЬ КАК И В GATSBY-NODE.JS
  // ДОЛЖЕН БЫТЬ pageID
  // contentfulVodkaProduct фильтруется по pageID

  // ВНИМАНИЕ!!! - исправляет ошибку
  // Error: The result of this StaticQuery could not be fetched.
  // ИСПОЛЬЗУЕМ ВНЕ КОМПОНЕНТОВ
export const query = graphql `
query {
  contentfulVodkaMain {
    question_vodka,
    question_vodka2,
    vodka_logo {
      file {
        url
      }
    }
    about_vodka_txt {
      json
    }
  }
  allContentfulVodkaProduct {
    edges {
      node {
        pageID
        vodka_name
        btn_order
      }
    }
  }
}
`
