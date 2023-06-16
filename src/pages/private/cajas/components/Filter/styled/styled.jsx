import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 5px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 19px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 0.3rem;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 1px 0 1px;
`;

export const Radio = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  margin: 0 0 1px 0;

  border: 1px solid #4caf50;
  border-radius: 50%;

  &:checked {
    background-image: radial-gradient(white 35%, #4caf50 40%);
  }

  &:hover {
    border: 2px solid #215f23;
  }
`;

export const Label = styled.label`
  text-decoration: ${(props) => props.selected};

  &:hover {
    color: gray;
  }
`;

export const FilterTitle = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  letter-spacing: 1px;

  @media (max-width: 400px) {
    text-decoration: underline;
  }
`;
