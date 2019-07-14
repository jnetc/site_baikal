import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Head from '../components/head'

const SecondPage = () => (
  <>
    <Head/>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <i className="icon-fish" style={{ fontSize: '2em', color: '#856'}}></i>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
