import React from 'react'
import { StyledForm } from './StyledForm'

const Form = ({children, className, onSubmit}) => {
  return (
    <StyledForm onSubmit={onSubmit} className={className}>
      {children}
    </StyledForm>
  )
}

export default Form