import React from 'react'
import { StyledTechCardBg } from './StyledTechCards'

const TechCards = ({children}) => {
  return (
    <StyledTechCardBg>{children}</StyledTechCardBg>
  )
}

export default TechCards