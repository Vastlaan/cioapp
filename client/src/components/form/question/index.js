import React from 'react'
import styled from 'styled-components'
import {TextBold, ButtonPrimary} from '../../../styles'

export default function QuestionComponent({answers, stage, setStage, setScore, score, currentScore, setCurrentScore, ready}) {

  function submitAnswer(e){
    e.preventDefault()

    // check if the answer is given, if not set error
    if(currentScore===null){
      // set Error (to implement)
      return
    }
    setScore(prevArray=> [...prevArray, currentScore])
    setStage(prevState=>Number(prevState)+1)
    setCurrentScore(null)
  }
  function goBack(){
    const arr= score
    arr.splice(-1, 1)
    setScore(arr)
    setStage(prevState=>Number(prevState) - 1)
  }

  return (
    <Question key={stage}>
      <TextBold margin='0 0 2.7rem 0'>Please choose the answer, which best describe your current mental state</TextBold>

      {answers.map(answer=>{
        return(
          <Answer key={`form_input-${answer.text}`}>
            <input 
              type="radio" 
              name="bdi_survey" 
              id={`question-${stage}-${answer.value}`} 
              value={answer.value} 
              onChange={()=>setCurrentScore(answer.value)} />

            <label htmlFor={`question-${stage}-${answer.value}`}>{answer.text}</label>
          </Answer>
        )
      })}

      <ButtonsContainer>
        <ButtonPrimary type="button" onClick={goBack} margin="0 2.7rem 0 0">Previous</ButtonPrimary>
        {ready?<ButtonPrimary type='submit' backgroundColor='var(--color-green)'>Submit</ButtonPrimary>:<ButtonPrimary type="button" onClick={submitAnswer}>Next</ButtonPrimary>}
      </ButtonsContainer>
    </Question>
  )
}
const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 2.7rem 1.4rem;
  box-shadow: 0 0 1.4rem rgba(0,0,0,.3);
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2.7rem 0;

`
const Answer = styled.div`
  display: flex;
  align-items: center;
  margin: .9rem 0;

  input{
    margin-right: .9rem;
  }
  label{
    font-size: 1.9rem;
    text-align: center;
  }
`