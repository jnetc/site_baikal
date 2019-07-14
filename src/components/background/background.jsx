import React from 'react'
import { MainReef, MobReef, SecondReef, ThirdReef,
  FourthReef, Stone, Stone2, Stone3 } from './reef'
import Lights from './lights'
import Bubbles from './bubbles'
import Fish from './fish'

const Background = () => {
  
    return (
      <div id="background">
        <FourthReef/>
        <ThirdReef/>
        <Fish data={{ class: 'fl2'}}/>
        <SecondReef/>
        <MainReef/>
        <MobReef/>
        <Stone2/>
        <Stone/>
        <Stone3/>
        <Lights/>
        <Bubbles data={{ class: 'fbl'}}/>
        <Bubbles data={{ class: 'tbl'}}/>
        <Fish data={{ class: 'fl1'}}/>
        <Fish data={{ class: 'fl3'}}/>
        
      </div>
    )

}

export default Background