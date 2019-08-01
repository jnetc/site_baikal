import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Contacts = () => {
  const data = useStaticQuery(graphql `
    query {
      contentfulContacts {
        email,
        facebook,
        tel,
        address {
          address
        }
        geo
        info {
          info
        }
      }
    }
  `)
  console.log(data.contentfulContacts);
  const { email, facebook, tel, address, geo } = data.contentfulContacts
  const cutTxt = 'https://www.'
  const cutFacebook = facebook.replace(cutTxt, '')
  console.log(cutFacebook);
  


  return (
    <ul className="info-block" style={{ zIndex: "500"}}>
      <li className="info-box">
        <a href={`mailto: ${ email }`}>
          <i className="icon-email" title={ email }></i>
          <p>{ email }</p>
        </a>
      </li>
      { facebook !== undefined && 
        <li className="info-box">
          <a href={ facebook }>
            <i className="icon-face" title={ cutFacebook }></i>
            <p>{ cutFacebook }</p>
          </a>
        </li> }
      
      <li className="info-box">
        <a href={ geo }>
          <i className="icon-geo" title={ address.address }></i>
          <pre>{ address.address }</pre>
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