import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Head from '../components/head'
import { graphql } from 'gatsby'

import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

  // Options for "RICH TEXT"
const Bold = ({ children }) => <b>{children}</b>
const Text = ({ children }) => <p id="about-vodka" className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}
  

const mainVodka = (props) => {
  // console.log(props);
    // Содержание страницы
  const { main_vodka_title, question_vodka, about_vodka_txt } = props.data.contentfulVodkaPropducts
    // Кол-во кнопок на продукцию
  const { edges } = props.data.allContentfulVodkaItems

  const buttons = edges.map(btn => {    
    return <Link 
              key={ btn.node.pagepath }
              to={`/vodka/${ btn.node.pagepath }`} 
              activeClassName="vodka-selected"
              className={`vodka-btn icon-${ btn.node.pagepath }`}>
            </Link>
  })

  return (
    <>
      <Head/>
      <SEO title="Page two" />
      <h1>{ main_vodka_title }</h1>
      { documentToReactComponents(about_vodka_txt.json, options) }
      <h5 id="q-selection-v">{ question_vodka }</h5>
      <div id="nav-vodka">
        { buttons }
      </div>
    </>
  )
}


export default mainVodka

  // GraphQl
export const MainVodkaPage = graphql `
query {
  contentfulVodkaPropducts {
    main_vodka_title,
    question_vodka,
    about_vodka_txt {
      json
    }
  }
  allContentfulVodkaItems {
    edges {
      node {
        pagepath
      }
    }
  }
}
`
