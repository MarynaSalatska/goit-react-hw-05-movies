import styled from 'styled-components';
export const StyledUl = styled.ul`
  & a {
    text-decoration: none;
  }
  & a:hover,
  & a:focus {
    color: #821b82;
  }
  & a.active {
    text-decoration-line: underline;
    color: green;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
`;
