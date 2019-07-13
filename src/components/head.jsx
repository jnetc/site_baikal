import React from "react"
import { Helmet } from "react-helmet"

export default class Head extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>          
          <meta charSet="utf-8" />
          <title>My Title</title>          
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" type="text/css" href="./icons/css/fontello-embedded.css"/>
        </Helmet>
      </div>
    )
  }
}