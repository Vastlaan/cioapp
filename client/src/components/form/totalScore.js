import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { ButtonRound, TextBold, ButtonPlane } from '../../styles'
import {RiArrowGoBackFill} from 'react-icons/ri'

export default function TotalScoreComponent({totalScore}) {
  return (
    <TotalScore>
      <TextBold>Thank you for taking part in our Health Survey!</TextBold>
      <TextBold margin="1.4rem 0 0 0" color="var(--color-primary)">Your result is:</TextBold>
      <Score>
        <p>{totalScore}</p>
      </Score>
      <TextBold>Here goes feedback</TextBold>
      <Link to='/'>
        <ButtonPlane>Go Back Home <RiArrowGoBackFill/></ButtonPlane>
      </Link>
    </TotalScore>
  )
}
const TotalScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.7rem 1.4rem;
`
const Score = styled.div`
  margin: 1.4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-green);
  width: 6.7rem;
  height: 6.7rem;
  padding: 2.7rem;
  border-radius: 50%;

  h3{
    color: var(--color-primary);
  }
  

  p{
    font-size: 2.7rem;
    font-weight: 600;
    color: white;
  }
`