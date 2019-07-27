import React from "react"
import { Helmet } from "react-helmet"

export default class Head extends React.Component {
  render() {
    return (
      <Helmet>          
        <meta charSet="utf-8" />
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
        <title>Baikal site</title>
      </Helmet>
    )
  }
}