import styled from "styled-components";

export const StyledModalContainerBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(18,18,20,0.5);
  padding: 0 15px;
`
export const StyledModalContainer = styled.div`
  max-width: 369px;
  width: 100%;
  height: max-content;
  background-color: var(--gray3);
  border-radius: 4px;


  form{
    padding: 1.3rem 15px;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  input, select{
    border: 1px solid var(--gray0);
  }

`

export const SyledModalHeader = styled.div`
  height: 50px;
  width: 100%;
  background-color: var(--gray2);
  position: relative;
  top: 0;
  padding: 0 15px;
  font-weight: 700;
  border-radius: 4px;

  button{
    background-color: transparent;
    color: var(--gray0);
    opacity: 0.5;
    padding: 0;
  }

  button:hover{
    opacity: 1;
  }
`

export const StyledSubmitTechRegisterButton = styled.button`
  /* flex: 1.8; */
  width: 100%;
  background-color: var(--color-primary-negative);
  color: var(--gray0);

  :hover{
    background-color: var(--color-primary-focus);
  }
`

export const StyledDeleteTechButton = styled.button`
  /* flex:1; */
  background-color: var(--gray1);
  color: var(--gray0);

  :hover{
    background-color: var(--gray0);
    color: var(--gray4);
    font-weight: 700;
  }
`