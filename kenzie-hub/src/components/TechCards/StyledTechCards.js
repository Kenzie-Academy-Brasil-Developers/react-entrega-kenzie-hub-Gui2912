import styled from 'styled-components';

export const StyledTechCardBg = styled.ul`
  max-width: 750px;
  width: 100%;
  padding: 10px;
  background-color: var(--gray3);
`;

export const StyledTechCard = styled.li`
  width: 100%;
  background-color: var(--gray4);
  height: 50px;
  padding: 13px 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;

  h2 {
    font-size: 0.9375rem;
    color: white;
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 0.75rem;
    color: var(--gray0);
    margin-right: 14px;
  }

  :hover{
    cursor: pointer;
    background-color: var(--gray1);
  }
`;
