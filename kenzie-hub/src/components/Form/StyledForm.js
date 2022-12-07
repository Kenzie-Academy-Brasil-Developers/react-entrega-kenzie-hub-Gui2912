import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 370px;
  width: 100%;
  padding: 2.625rem 1.0625rem 2.625rem 1.375rem;
  background-color: var(--gray3);
  border-radius: 4px;
`

export const StyledInput = styled.input`
  height: 44px;
  background-color: var(--gray2);
  color: var(--gray1);
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--gray2);
  font-size: 1rem;
  padding: 10.5px 16px;
  margin-bottom: 20px;

  :focus{
    border-color: var(--gray0);
    outline: none;
  }
`

export const StyledLabel = styled.label`
  justify-self: start;
  color: var(--gray0);
  width: 100%;
  margin-bottom: 20px;
`