import React from 'react'
import { graphql } from 'gatsby';

const VodkaPages = (props) => {
  

  console.log(props);
  

  
    return (
    
       <p>{props.data.contentfulVodkaItems.vodka_name}</p>

    )
  }
  


export default VodkaPages

export const query = graphql `
query ( $pagepath: String! ){
  contentfulVodkaItems (pagepath:{eq: $pagepath}) {
    vodka_name
  }
}
`