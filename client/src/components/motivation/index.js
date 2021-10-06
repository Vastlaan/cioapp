import React from 'react'
import styled from 'styled-components'
import { TextBold } from '../../styles'

export default function MotivationComponent({text, color}) {
  return (
    <Motivation>
      <TextBold color={color} align='left'>
        {text}
      </TextBold>
    </Motivation>
  )
}

const Motivation = styled.section`
  padding: 6.7rem 1.4rem;
  background-color: white;
`
