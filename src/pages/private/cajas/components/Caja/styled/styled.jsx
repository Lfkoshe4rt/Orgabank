import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  border-left: 2px solid ${(props) => props.color};
  border-top: 1px solid ${(props) => props.color};
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: green;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  &:hover {
    color: #09350b;
  }
`;
export const Nombre = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  font-size: 1.1rem;
  margin: 5px 5px 0 0;
  padding: 0 5px 0 0;

  span {
    font-weight: bold;
  }
`;
