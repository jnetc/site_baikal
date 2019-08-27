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
      contentfulLemonadeMain {
        limsa_logo {
          file {
            url
          }
        }
      }
    }
  `)
  
  const { email, tel, address, geo } = data.contentfulContacts 
  const { vodka_logo } = data.contentfulVodkaMain
  const { limsa_logo } = data.contentfulLemonadeMain
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
  console.log(showContacts, show);
  
    
  return (
    <>
      { showContacts !== "vodka" ? <header className={ show ? "show lheader" : "" }>
      <Link to="/limsa" 
            className={ checkLimsa !== null ? "l-logo-prod show-logo" : "l-logo-prod"}>
        <img id="v-product-logo" src={ limsa_logo.file.url } alt="logo"/>
      </Link>
      <ul className="info-block">
        <li className="info-box">
          <a href={`mailto: ${ email }`}>
            <i className="licon icon-email" title={ email }>
              <span></span>
            </i>
            <p>{ email }</p>
          </a>
        </li>
        <li className="info-box">
          <a href={`tel: ${ tel }`}>
            <i className="licon icon-phone" title={ tel }>
              <span></span>
            </i>
            <p>{ tel }</p>
          </a>
        </li>
        <li className="info-box">
          <a href={ geo }>
            <i className="licon icon-geo" title={ address }>
              <span></span>
            </i>
            <p>{ address }</p>
          </a>
        </li>
      </ul>
    </header> : 
    <header className={ show ? "show vheader" : "" }>
      <Link to="/vodka" 
            className={ checkVodka !== null ? "v-logo-prod show-logo" : "v-logo-prod"}>
        <img id="v-product-logo" src={ vodka_logo.file.url } alt="logo"/>
      </Link>
      <ul className="info-block">
        <li className="info-box">
          <a href={`mailto: ${ email }`}>
            <i className="vicon icon-email" title={ email }>
              <span></span>
            </i>
            <p>{ email }</p>
          </a>
        </li>
        <li className="info-box">
          <a href={`tel: ${ tel }`}>
            <i className="vicon icon-phone" title={ tel }>
              <span></span>
            </i>
            <p>{ tel }</p>
          </a>
        </li>
        <li className="info-box">
          <a href={ geo }>
            <i className="vicon icon-geo" title={ address }>
              <span></span>
            </i>
            <p>{ address }</p>
          </a>
        </li>
      </ul>
    </header>}
    </>
    
  )
}

export default Contacts