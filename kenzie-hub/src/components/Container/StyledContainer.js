import styled from "styled-components";

export const StyledContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--gray4);
  padding: 0 15px;
`

export const StyledContainerContent = styled.div`
  max-width: 630px;
  width: 100%;


  h2,h3,p{
    color: var(--gray0);
  }

  span{
    color: var(--gray2);
  }
`

export const StyledContainerDashboard = styled.div`
  max-width: 750px;
  width: 100%;
  background-color: var(--gray4);
`