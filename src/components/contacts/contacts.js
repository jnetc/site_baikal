import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { CSSTransition } from 'react-transition-group'

const Contacts = (props) => {
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
      contentfulVodkaMain {
        vodka_logo {
          file {
            url
          }
        }
      }
    }
  `)
  const { email, tel, address, geo } = data.contentfulContacts 
  const { url } = data.contentfulVodkaMain.vodka_logo.file 
  const { pathname } = props.path
  const showContacts = pathname.split('/').splice(1, 1)[0];
    console.log(pathname !== "/vodka");
    
  return (
    <header className={ showContacts === "vodka" ? "show" : "" }>
      <CSSTransition
        in={ pathname !== "/vodka" }
        timeout={ 500 }
        className="v-logo-prod">
        <Link to="/vodka">
          <img id="v-product-logo" src={ url } alt="logo"/>
        </Link>
      </CSSTransition>
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
    </header>
  )
}

export default Contacts