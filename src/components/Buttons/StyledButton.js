import styled from "styled-components";

export const StyledButton = styled.button`
  color: black;
  height: 38px;
  background-color: var(--color-primary);
  border-radius: 4px;
  border: none;
`

export const StyledAddTech = styled.button`
  background-color: var(--gray3);
  color: var(--gray0);
  font-size: 1.5625rem;
  padding: 0 5px;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    background-color: var(--gray2);

  }
`