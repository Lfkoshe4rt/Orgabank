import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-height: 520px) {
    padding: 0 5px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  @media (max-height: 520px) {
    padding: 0 5px;
  }
`;

export const Option = styled.option`
  padding: 10px;
  &:focus {
    background-color: #ccc;
  }

  @media (max-height: 520px) {
    padding: 0 5px;
  }
`;

export const InputGroup = styled.div`
  margin: 15px 0;
  @media (max-height: 520px) {
    margin: 5px 0;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 3px;
  @media (max-height: 520px) {
    margin-bottom: 0;
    font-size: 15px;
  }
`;
