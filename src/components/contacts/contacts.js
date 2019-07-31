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
  const { email, facebook, tel, address, geo, info } = data.contentfulContacts
  const cutTxt = 'https://www.'
  const cutFacebook = facebook.replace(cutTxt, '')
  console.log(cutFacebook);
  


  return (
    <ul id="info-block" style={{ zIndex: "500"}}>
      <li className="info-box">
        <a href={`mailto: ${ email }`}>
          <span className="icon-email" title={ email }></span>
        </a>
      </li>
      { facebook !== undefined && 
        <li className="info-box">
          <a href={ facebook }>
            <span className="icon-face" title={ cutFacebook }></span>
          </a>
        </li> }
      
      <li className="info-box">
        <a href={ geo }>
          <span className="icon-geo" title={ address.address }></span>
        </a>
      </li>
      <li className="info-box">
        <a href={`tel: ${ tel }`}>
          <span className="icon-phone" title={ tel }></span>
        </a>
      </li>
    </ul>
  )
}

export default Contacts