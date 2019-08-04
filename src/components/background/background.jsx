import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MainReef, MobReef, SecondReef, ThirdReef,
  FourthReef, Stone, Stone2, Stone3 } from './reef'
import Lights from './lights'
import Bubbles from './bubbles'
import Fish from './fish'

const Background = () => {
    const firm = useStaticQuery(graphql `
      query {
        contentfulContacts {
          firm_name
        }
      }
    `)
    const { firm_name } = firm.contentfulContacts
    return (
      <div id="background">
        <FourthReef/>
        <ThirdReef/>
        <Fish data={{ class: 'fl2'}}/>
        <Fish data={{ class: 'fl1'}}/>
        <Fish data={{ class: 'fl3'}}/>
        <SecondReef/>
        <MainReef/>
        <MobReef/>
        <Stone2/>
        <Stone/>
        <Stone3/>
        <Lights/>
        <Bubbles data={{ class: 'fbl'}}/>
        <Bubbles data={{ class: 'tbl'}}/>
        <footer>
          © {new Date().getFullYear()} { firm_name }
        </footer>
      </div>
    )

}

export default Background