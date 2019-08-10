import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from "../components/seo"

const LemonadePages = (props) => {
  const { lemonade_name,
          lemoande_alk,
          lemonade_box,
          lemonade_bottle,
          lemonade_ing,
          nutritional_content,
          lemonade_made,
          lemonade_preservation,
          lemonade_license,
          seo_title,
          seo_description,
          lemonade_img } = props.data.contentfulLemonadeProduct
  const { edges } = props.data.allContentfulLemonadeProduct
    // Buttons
  const buttons = edges.map(btn => {      
    return <Link 
              key={ btn.node.pageID }
              to={`/limsa/${ btn.node.pageID }`} 
              activeClassName="lemonade-selected"
              className="lemonade-btn"
              style={{ order: `${ btn.node.btn_order }`}}
              title={ btn.node.lemonade_name }>
              <p>{ lemonade_name }</p>
              <span></span>
            </Link>
    })
  return (
    <>
      <SEO title={ seo_title } description={ seo_description } />
      <article className="v-container">
        <img className="v-bottle" src={ lemonade_img.file.url} alt={ lemonade_name } draggable="false"/>
        <section className="l-specs">
          <div className="l-box">
            <h2>{ lemonade_name }</h2>
              <ul >
                <li><span>Alkoholi:</span><p>{ lemoande_alk }</p></li>
                <li><span>Tilavuus:</span><p>{ lemonade_bottle }L</p></li>
                <li><span>Pakkaus:</span><p>{ lemonade_box }</p></li>
                <li><span>Aineosat:</span><p>{ lemonade_ing }</p></li>
                <li><span>Säilytys:</span><p>{ lemonade_preservation }</p></li>
                <li><span>Ravintosisältö:</span><p>{ nutritional_content }</p></li>
                <li><span>Valmistaja:</span><p>{ lemonade_made }</p></li>
              </ul>
          </div>
        </section>
        { edges.length > 1 && <ul id="select-items">
          { buttons }
        </ul> }
        
        { lemonade_license && <section className="v-licence">
          <p>Tuote on EU:n lainsäädännön mukainen, hyväksytty EU:ssa.</p>
        </section>}
      </article>
    </>
  )
}
export default LemonadePages

export const query = graphql `
query ($pageID: String!) {
  contentfulLemonadeProduct (pageID: {eq: $pageID}) {
    lemonade_name
    lemoande_alk
    lemonade_box
    lemonade_bottle
    lemonade_ing
    nutritional_content
    lemonade_made
    lemonade_preservation
    lemonade_license
    seo_title
    seo_description
    lemonade_img {
      file {
        url
      }
    }
  }
  allContentfulLemonadeProduct {
    edges {
      node {
        pageID
        lemonade_name
        btn_order
      }
    }
  }
}
`