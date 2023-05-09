import styled from "styled-components";

export const Button = styled.button`
  padding: 7px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.color || "#000"};
  color: black;
  text-align: center;
  font-size: 16px;
  cursor: pointer;

  @media (max-height: 520px) {
    padding: 5px;
    font-size: 14px;
  }
`;
