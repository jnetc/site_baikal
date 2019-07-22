import React from 'react'
import { graphql } from 'gatsby';
import VodkaNav from '../components/vodka-nav'

const VodkaPages = (props) => {
    // Кол-во кнопок на продукцию
    // Оборачиваем данные в навигацию
    // Передаем название линков для роутинга
  const { edges } = props.data.allContentfulVodkaProduct
    return (
      <>
      <VodkaNav props={ edges }>
        <p>{props.data.contentfulVodkaProduct.vodka_name}</p>
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
    vodka_name
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