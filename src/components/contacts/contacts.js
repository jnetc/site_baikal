import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'


const Contacts = (props) => {
  const data = useStaticQuery(graphql `
    query {
      contentfulContacts {
        email,
        tel,
        address,
        geo
      }
      contentfulVodkaMain {
        vodka_logo {
          file {
            url
          }
        }
      }
      contentfulMainPage {
        logo {
          file {
            url
          }
        }
      }
    }
  `)
  const { email, tel, address, geo } = data.contentfulContacts 
  const { vodka_logo } = data.contentfulVodkaMain
  const { logo } = data.contentfulMainPage
  const { path } = props
    // Показываем шапку с контактами, без лого
  const showContacts = path.split('/').splice(1, 1)[0];
  const show = showContacts === "vodka" || showContacts === "limsa"  
    // Показываем лого когда выбран продукт
  const txt = path
  const maskVodka = '/vodka/[A-Z,a-z,0-9]'
  const checkVodka = txt.match(maskVodka)
  const maskLimsa = '/limsa/[A-Z,a-z,0-9]'
  const checkLimsa = txt.match(maskLimsa)    
  
  return (
    <>
      { show && <header className={ show ? "show" : "" }>
      <Link to="/vodka" 
            className={ checkVodka !== null ? "v-logo-prod show-logo" : "v-logo-prod"}>
        <img id="v-product-logo" src={ vodka_logo.file.url } alt="logo"/>
      </Link>
      <Link to="/limsa" 
            className={ checkLimsa !== null ? "l-logo-prod show-logo" : "l-logo-prod"}>
        <img id="v-product-logo" src={ logo.file.url } alt="logo"/>
      </Link>
      <ul className="info-block">
        <li className="info-box">
          <a href={`mailto: ${ email }`}>
            <i className="icon-email" title={ email }>
              <span></span>
            </i>
            <p>{ email }</p>
          </a>
        </li>      
        <li className="info-box">
          <a href={ geo }>
            <i className="icon-geo" title={ address }>
              <span></span>
            </i>
            <p>{ address }</p>
          </a>
        </li>
        <li className="info-box">
          <a href={`tel: ${ tel }`}>
            <i className="icon-phone" title={ tel }>
              <span></span>
            </i>
            <p>{ tel }</p>
          </a>
        </li>
      </ul>
    </header>}
    </>
    
  )
}

export default Contacts