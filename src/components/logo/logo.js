import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulVodkaMain {
        vodka_logo {
          file {
            url
          }
        }
      }
    }
  `)
  console.log(data);
  const { url } = data.contentfulVodkaMain.vodka_logo.file
  return (

    <img id="head-logo" src={ url } alt="logo"/>
  )
}
export default Logo
