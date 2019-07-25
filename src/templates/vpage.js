import React, { useState } from 'react'
import { graphql } from 'gatsby';
import VodkaNav from '../components/vodka-nav'
import { CSSTransition } from 'react-transition-group'

import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

  // Options for "RICH TEXT"
const Bold = ({ children }) => <b>{children}</b>
const Text = ({ children }) => <p id="vodka-history" className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

const VodkaPages = (props) => {
  const [state, setState] = useState(false);
    // Кол-во кнопок на продукцию
    // Оборачиваем данные в навигацию
    // Передаем название линков для роутинга
  const { edges } = props.data.allContentfulVodkaProduct
  const { 
    vodka_name,
    vodka_alk,
    vodka_box,
    vodka_ing,
    vodka_ean,
    vodka_made,
    vodka_bottle,
    vodka_enough,
    vodka_license,
    vodka_warehouse,
    vodka_history,
    vodka_img } = props.data.contentfulVodkaProduct
  
  
  
    return (
      <>
      <VodkaNav props={ edges }>
        <article className="vodka-container">
          <img src={ vodka_img.file.url} alt={ vodka_name } draggable="false"/>
          <section className="vodka-specs">
            <div className={ state ? "vodka-box show" : "vodka-box"}>
              <h2>{ vodka_name }</h2>
                <ul >
                  <li><span>Alkoholi:</span><p>{ vodka_alk }%</p></li>
                  <li><span>Tilavuus:</span><p>{ vodka_bottle }L</p></li>
                  <li><span>Pakkaus:</span><p>{ vodka_box }</p></li>
                  <li><span>Aineosat:</span><p>{ vodka_ing }</p></li>
                  <li><span>Valmistaja:</span><p>{ vodka_made }</p></li>
                  <li><span>EAN koodi:</span><p>{ vodka_ean }</p></li>
                  <li><span>Varasto:</span><p>{ vodka_warehouse }</p></li>
                </ul> 
            <button id="vodka-item-btn" onClick={ ()=> {setState(!state)}}>Tuotetiedot</button>
            </div>
            <div className={ !state ? "vodka-box2 show" : "vodka-box2"}>
              <h2>{ vodka_name }</h2>
              { documentToReactComponents(vodka_history.json, options) }
              <button id="vodka-item-btn" onClick={ ()=> {setState(!state)}}>Tuotetiedot</button>
            </div>
        

          </section>
          { vodka_license && <section className="vodka-licence">
            <p>Tuotettu lisenssisopimuksen perusteella BAIKAL, LLC: n kanssa.</p>
            <p>Tuote on EU:n lainsäädännön mukainen, hyväksytty EU:ssa.</p>
          </section>}
        </article>
      </VodkaNav>
      </>
    )
  }
export default VodkaPages

  // GraphQl
  // ЗДЕСЬ КАК И В GATSBY-NODE.JS
  // ДОЛЖЕН БЫТЬ pageID
  // contentfulVodkaProduct фильтруется по pageID
export const query = graphql `
query ( $pageID: String! ){
  contentfulVodkaProduct (pageID:{eq: $pageID}) {
    vodka_name,
    vodka_alk,
    vodka_box,
    vodka_ing,
    vodka_ean,
    vodka_made,
    vodka_bottle,
    vodka_enough,
    vodka_license,
    vodka_warehouse,
    vodka_history {
      json
    }
    vodka_img {
      file {
        url
      }
    }
  }
  allContentfulVodkaProduct {
    edges {
      node {
        pageID
      }
    }
  }
}
`