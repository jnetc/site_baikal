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
        <a href={`mailto: ${ email }`}><span className="icon-email" title={ email }>
          <p className="tooltip">{ email }</p>
        </span></a>
      </li>
      { facebook !== undefined && 
        <li className="info-box">
          <a href={ facebook }><span className="icon-face" title={ cutFacebook }>
          <p className="tooltip">{ cutFacebook }</p>
          </span></a>
        </li> }
      
      <li className="info-box">
        <a href={ geo }><span className="icon-geo" title={ address.address }>
        <p className="tooltip">{ address.address }</p>
        </span></a>
      </li>
      <li className="info-box">
        <a href={`tel: ${ tel }`}><span className="icon-phone" title={ tel }>
        <div className="tooltip">{ tel }</div>
        </span></a>
      </li>
      { info !== undefined && 
        <li className="info-box">
          <span className="icon-info">
            <p className="tooltip">{ info.info }</p>
          </span>
        </li> }
      
    </ul>
  )
}

export default Contacts