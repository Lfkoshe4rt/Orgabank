import styled from "styled-components";

export const FormRegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 70%;
    }

    @media (max-width: 520px) {
      width: 80%;
    }

    @media (max-width: 375px) {
      width: 90%;
    }

    img {
      margin-top: 20px;
      width: 50px;
      height: 50px;
    }

    input {
      width: 80%;
      height: 35px;
      margin: 10px;
      font-size: 16px;
      text-align: center;

      border: 1px solid #ccc;

      &:focus {
        outline: none;
        border: 1px solid #4caf50;
        color: black;
      }

      @media (max-width: 768px) {
        font-size: 16px;
        height: 30px;
      }

      @media (max-width: 520px) {
        font-size: 14px;
        height: 25px;
      }
    }
  }
`;

export const ButtonRegister = styled.button`
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

  @media (max-width: 768px) {
    font-size: 16px;
    height: 30px;
  }

  @media (max-width: 520px) {
    font-size: 14px;
    height: 25px;
  }
`;

export const ButtonVolver = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  color: #4caf50;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  text-decoration: underline;

  &:hover {
    color: #19491c;
  }
`;

export const FormRegisterStyledError = styled.p`
  color: red;
  font-size: 15px;
`;

export const FormRegisterStyledTitle = styled.h1`
  color: #000;
  font-size: 40px;
  font-weight: 600;
  margin: 10px;

  span {
    color: #4caf50;
    font-size: 36px;
    font-weight: 600;
    display: flex;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: #43a047;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 520px) {
      font-size: 28px;
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

export const FormMessageSuccess = styled.p`
  color: #4caf50;
  font-size: 16px;
  font-weight: 600;
  margin: 10px;
`;
