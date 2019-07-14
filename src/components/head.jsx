import React from "react"
import { Helmet } from "react-helmet"
// import '../../static/icons/fontello.css'

export default class Head extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>          
          <meta charSet="utf-8" />
          <title>Baikal site</title>          
          {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" rel="stylesheet"/> */}
          {/* <link href="/static/icons/fontello.css" rel="stylesheet" type="text/css"/> */}
        </Helmet>
      </div>
    )
  }
}