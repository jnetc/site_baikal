import React from "react"
import Helmet from "react-helmet"

const SEO = ({ title, description}) => {  
  return (
    <Helmet titleTemplate="%s | baikal.fi">
      <html lang="fi" />
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="og:title" content={ title } />
        <meta name="description" content={ description } />
        <meta name="og:description" content={ description } />
        <meta name="og:type" content="website" />
        <meta name="author" content="@ЖнецЪ" />
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
        <link rel="prefetch" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap"/> 
    </Helmet>
  )
}

export default SEO
