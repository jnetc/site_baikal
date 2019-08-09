import React from "react"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>404 NOT FOUND</h1>
    <Link to="/" className="vodka-btn">
      <p>Paluu Kotisivun</p>
      <span></span>
    </Link>
  </>
)

export default NotFoundPage
