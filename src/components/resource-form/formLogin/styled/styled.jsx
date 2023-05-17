import styled from "styled-components";

export const FormLoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  background-color: #f5f5f5;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 50%;
    background-color: #fff;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 50%;
    }

    @media (max-width: 425px) {
      width: 70%;
    }

    @media (max-width: 375px) {
      width: 80%;
    }

    input {
      width: 80%;
      height: 35px;
      margin: 10px;
      font-size: 20px;
      text-align: center;
      color: #4caf50;
      border: 1px solid #ccc;

      &:focus {
        outline: none;
        border: 1px solid #4caf50;
        color: black;
      }
    }

    button {
      width: 80%;
      height: 35px;
      margin: 10px;
      border: none;
      border-radius: 5px;
      background-color: #4caf50;
      color: #fff;

      &:hover {
        cursor: pointer;
        background-color: #43a047;
      }
    }
  }
`;

export const FormLoginStyledError = styled.p`
  color: red;
  font-size: 15px;
`;

export const FormLoginStyledTitle = styled.h1`
  color: #000;
  font-size: 40px;
  font-weight: 600;
  margin: 10px;

  span {
    color: #4caf50;
    font-size: 36px;
    font-weight: 600;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: #43a047;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }

  @media (max-width: 280px) {
    font-size: 8px;
  }

  @media (max-width: 240px) {
    font-size: 6px;
  }
`;
