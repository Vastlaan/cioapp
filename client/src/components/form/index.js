import React, {useState} from 'react'
import styled from 'styled-components'
import Question from './question'
import TotalScore from './totalScore'
import { ButtonRound, TextBold } from '../../styles'
import {data} from './data'

export default function FormComponent() {

  const [stage, setStage] = useState(0)
  const [score, setScore] = useState([])
  const [currentScore, setCurrentScore] = useState(null)
  const [totalScore, setTotalScore] = useState(null)

  function submitForm(e){

    e.preventDefault()

    if(score.length>0 && currentScore!==null){
      const finalScore = score.reduce((acc, val)=> acc+val, 0)
      const totalScore = finalScore + currentScore
      console.log(totalScore)
      setTotalScore(totalScore)
      setStage(-1)
      setScore([])
    }
  }

  console.log(stage, score)

  return (
    <>
      
      {totalScore ? <TotalScore totalScore={totalScore} /> : <Form onSubmit={submitForm}>
        {
          stage===0?
            <ButtonRound margin="4.7rem 0" backgroundColor={"var(--color-primary)"} color="white" onClick={()=>setStage(1)}>Start Survey</ButtonRound>
            : stage>0 &&<Question 
            stage={stage}
            setStage={setStage}
            setScore={setScore}
            score={score}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            answers={data[stage-1]}
            ready={stage===data.length}
          />
        }
      </Form>}
    </>
  )
}

const Form = styled.form`
  padding: 4.7rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`