import React from 'react'
import styled from 'styled-components'
import respond from '../../styles/respond'
import Image1 from '../../img/card-1.jpg'
import Card from '../card'

export default function CardsComponent() {
  return (
    <Cards>
      <Card 
        link='/healthy-hacks'
        backgroundColor="rgba(252, 50, 60, .8)" 
        image={Image1} 
        heading='Healthy Hacks' 
        para='Explore the tips & tricks how to improve your mental and physical condition and stayed focused on your health'
      />

      <Card 
        link='/support'
        backgroundColor="rgba(101, 195, 42, .8)" 
        image={Image1} 
        heading='Immediate Support' 
        para='Explore the tips & tricks how to improve your mental and physical condition and stayed focused on your health'
      />

      <Card 
        link='/emergency'
        backgroundColor="rgba(230, 90, 234, .8)" 
        image={Image1} 
        heading='Specialised Help' 
        para='Explore the tips & tricks how to improve your mental and physical condition and stayed focused on your health'
      />
    </Cards>
  )
}

const Cards = styled.section`
  margin: 6.7rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;

  ${() => respond("m", "flex-direction: row; align-items: stretch; justify-content: center; flex-wrap: wrap;")};
  ${()=>respond('m','')}

`