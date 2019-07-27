import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Contacts = () => {
  return (
    <ul id="info-block" style={{ zIndex: "500"}}>
      <li className="info-box">
        <a href="mailto:"><span className="icon-email" title="dfsfsfsffsfa"></span></a>
      </li>
      <li className="info-box">
        <a href="/"><span className="icon-face" title="dfsfsfsffsfa"></span></a>
      </li>
      <li className="info-box">
        <a href="/"><span className="icon-geo" title="dfsfsfsffsfa"></span></a>
      </li>
      <li className="info-box">
        <a href="tel: "><span className="icon-phone" title="dfsfsfsffsfa"></span></a>
      </li>
      <li className="info-box">
        <span className="icon-info"></span>
      </li>
    </ul>
  )
}

export default Contacts