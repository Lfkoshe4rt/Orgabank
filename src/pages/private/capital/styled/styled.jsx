import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 731px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid rgb(76, 155, 80);
  float: right;
  border-radius: 5px;
  margin: 10px 0;
  width: 220px;

  @media (max-width: 731px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 731px) {
    margin: 20px 0;
    gap: 20px;
    padding: 0;
  }
`;

export const ButtonAddMovement = styled.button`
  padding: 6px 40px;
  border: 1px solid rgb(76, 155, 80);
  border-radius: 5px;
  background-color: rgb(76, 175, 80);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(76, 155, 80);
  }

  @media (max-width: 320px) {
    width: 100%;
    padding: 3px;
  }
`;

export const ButtonAddContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-top: 10px;
`;
