import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {respond, Heading2, TextBold, ButtonPlane} from '../../styles'
import {BsArrowRight} from 'react-icons/bs'

export default function CardComponent({link, backgroundColor, image, heading, para}) {
  return (
    <Card backgroundColor={backgroundColor} image={image}>

      <Heading2 align='left' color='white'>{heading}</Heading2>

      <Line/>

      <TextBold align='left' color='white'>{para}</TextBold>

      <Link to={link} style={{margin: "4.7rem 0 0 0"}}>
      
        <ButtonPlane>
          Learn More
          <BsArrowRight/>
        </ButtonPlane>
      </Link>

    </Card>
  )
}

const Card = styled.div`
  width: 40rem;
  padding: 4.7rem;
  margin: 2.7rem;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, ${p=>p.backgroundColor}, ${p=>p.backgroundColor}), url(${p=>p.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 1rem rgba(0,0,0,.3);

  ${()=>respond('m', 'margin-right: auto;')}
  ${()=>respond('xl', 'margin-right: 2.7rem;')}
`
const Line = styled.div`
  width: 15rem;
  height: 5px;
  background-color: white;
  margin: 2.7rem 0;
`