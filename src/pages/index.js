import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import './index.scss'
import Head from '../components/head'

import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(graphql `
  query {
    contentfulMainPage {
      title,
      question,
      aboutBaikal {
        aboutBaikal
      }
    }
    contentfulAsset {
      file {
        url
      }
    }
  }
  `)
  console.log(data);
  
  const { title, question, aboutBaikal } = data.contentfulMainPage

  return (
    <>
      <Head/>
      <SEO title="Home" />
      <img id="logo-baikal" src={ data.contentfulAsset.file.url } alt="logo"/>
      <h1>{ title }</h1>
      <p id="redirect">{ question }</p>
      <div id="redirect-btns">
        <Link className="redirect-link yes" to="/vodka/">Kyllä</Link>
        <Link className="redirect-link no" to="/page-2/">En</Link>
      </div>
      <label id="show-about">Baikalista
        <input type="checkbox"/>
      </label>
      {/* <p id="main-about-site">{ aboutBaikal.aboutBaikal }</p> */}

    </>
  )
}


export default IndexPage
