import React from "react"
import SEO from "../components/seo"
import Head from '../components/head'
import { graphql } from 'gatsby'
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
  const { main_vodka_title, question_vodka, about_vodka_txt } = props.data.contentfulVodkaMain
    // Кол-во кнопок на продукцию
    // Оборачиваем данные в навигацию
    // Передаем название линков для роутинга
  return (
    <>
      <Head/>
      <SEO title="Page two" />
        <h1>{ main_vodka_title }</h1>
        { documentToReactComponents(about_vodka_txt.json, options) }
        <h5 id="q-selection-v">{ question_vodka }</h5>
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
    main_vodka_title,
    question_vodka,
    about_vodka_txt {
      json
    }
  }
}
`
