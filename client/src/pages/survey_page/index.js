import React from 'react'
import Header from '../../components/header'
import ImageHeader from '../../img/header-1.jpg'
import Motivation from '../../components/motivation'
import Form from '../../components/form'

export default function SurveyPage() {
  return (
    <>
      <Header
        title={`Welcome to Health Survey`}
        description={`Want to know more about your mental condition?
         Want to help AND Digital measure overall trends of their employees mental health?
         Fill the form below and let us help you and our organization with providing necessary support.`}
        image={ImageHeader}
      />

      <Form />

      <Motivation text='Privacy is our priority! All the data provided are stored in secure way and will not be shared.'/>
      
      
    </>
  )
}
