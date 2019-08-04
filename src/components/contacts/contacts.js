import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Contacts = () => {
  const data = useStaticQuery(graphql `
    query {
      contentfulContacts {
        email,
        tel,
        address,
        geo
        info {
          info
        }
      }
    }
  `)
  const { email, tel, address, geo } = data.contentfulContacts

  return (
    <ul className="info-block" style={{ zIndex: "500"}}>
      <li className="info-box">
        <a href={`mailto: ${ email }`}>
          <i className="icon-email" title={ email }></i>
          <p>{ email }</p>
        </a>
      </li>      
      <li className="info-box">
        <a href={ geo }>
          <i className="icon-geo" title={ address }></i>
          <pre>{ address }</pre>
        </a>
      </li>
      <li className="info-box">
        <a href={`tel: ${ tel }`}>
          <i className="icon-phone" title={ tel }></i>
          <p>{ tel }</p>
        </a>
      </li>
    </ul>
  )
}

export default Contacts