import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.scss'
import Head from '../components/head'

const IndexPage = () => (
  <>
    <Head/>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <i className="icon-fish" style={{ fontSize: '2em', color: '#000'}}></i>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
