import React from 'react'
import { StyledButton } from './StyledButton'

const Buttons = ({children, type}) => {
  return (
    <StyledButton type={type}>{children}</StyledButton>
  )
}

export default Buttons