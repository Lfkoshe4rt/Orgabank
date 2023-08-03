import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  flex-wrap: wrap;
`;

export const Lista = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  @media (max-width: 731px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Cajas = styled.div`
  width: 100%;
`;

export const ListaCajas = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  padding: 5px;
`;

export const InvisibleButton = styled.button`
  border: none;
  background: none;

  display: block;
  color: #4caf50;

  &:hover {
    color: #3b8640;
  }
`;
