import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMainPage {
        logo {
          file {
            url
          }
        }
      }
    }
  `)
  console.log(data);
  const { url } = data.contentfulMainPage.logo.file
  return (

    <img id="head-logo" src={ url } alt="logo"/>
  )
}
export default Logo
