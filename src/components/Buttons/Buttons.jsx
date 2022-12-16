import React from 'react'
import { StyledButton } from './StyledButton'

const Buttons = ({children, type, className, onClick}) => {
  return (
    <StyledButton onClick={onClick} className={className} type={type}>{children}</StyledButton>
  )
}

export default Buttons