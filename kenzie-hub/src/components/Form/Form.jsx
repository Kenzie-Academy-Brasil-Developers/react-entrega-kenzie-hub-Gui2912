import React from 'react'
import { StyledForm } from './StyledForm'

const Form = ({children, className}) => {
  return (
    <StyledForm className={className}>
      {children}
    </StyledForm>
  )
}

export default Form