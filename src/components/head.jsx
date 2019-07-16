import React from "react"
import { Helmet } from "react-helmet"

export default class Head extends React.Component {
  render() {
    return (
      <Helmet>          
        <meta charSet="utf-8" />
        <title>Baikal site</title>
      </Helmet>
    )
  }
}