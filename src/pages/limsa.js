import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

  // Options for "RICH TEXT"
const Bold = ({ children }) => <b>{children}</b>
const Text = ({ children }) => <p id="about-lemonade" className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

const mainLimsa = ({ data }) => {
  console.log(data);
  const { seo_title, seo_description, lemonade_about_txt } = data.contentfulLemonadeMain
  const { url } = data.contentfulMainPage.logo.file
  const { edges } = data.allContentfulLemonadeProduct

  const buttons = edges.map(btn => {

    return <Link 
              key={ btn.node.pageID }
              to={`/limsa/${ btn.node.pageID }`} 
              activeClassName="lemonade-selected"
              className="lemonade-btn"
              // style={{ order: `${ btn.node.btn_order }`}}
              title={ btn.node.lemonade_name }>
              <p>{ btn.node.lemonade_name }</p>
              <span></span>
            </Link>
  })
  return (
    <>
      <SEO title={ seo_title } description={ seo_description } />
      <img id="lemonade-main-logo" src={ url } alt="logo"/>
      { documentToReactComponents(lemonade_about_txt.json, options)}
      <ul id="limsa-main">
          { buttons }
      </ul>
    </>
  )
}

export default mainLimsa

export const query = graphql `
  query {
    contentfulLemonadeMain {
      seo_title
      seo_description
      lemonade_about_txt {
        json
      }
    }
    allContentfulLemonadeProduct {
      edges {
        node {
          pageID
          lemonade_name
        }
      }
    }
    contentfulMainPage {
      logo {
        file {
          url
        }
      }
    }
  }
`