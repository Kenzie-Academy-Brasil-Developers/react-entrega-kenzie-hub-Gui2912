import React from 'react'
import { StyledButton } from './StyledButton'

const Buttons = ({children}) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Buttons