import React from "react"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1 className="notfound">404</h1>
    <h3 className="notfound">PAGE NOT FOUND</h3>
    <Link to="/" className="vodka-btn">
      <p>Paluu Kotisivun</p>
      <span></span>
    </Link>
  </>
)

export default NotFoundPage
