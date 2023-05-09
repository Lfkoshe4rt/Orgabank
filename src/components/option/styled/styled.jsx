import styled from "styled-components";

export const Option = styled.option`
  padding: 10px;
  &:focus {
    background-color: #ccc;
  }

  @media (max-height: 520px) {
    padding: 0 5px;
  }
`;
