import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  background-color: ${(props) => props.readOnly && "#dfdfdf"};

  /* 
  @media (max-height: 520px) {
    padding: 0 5px;
  } */
`;
