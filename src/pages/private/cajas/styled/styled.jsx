import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1215px) {
    justify-content: center;
  }
`

export const Lista = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  @media (max-width: 730px) {
    flex-direction: column;
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
`

export const Cajas = styled.div`
  width: 100%;
`
export const ListaCajas = styled.ul`
  list-style: none;
`
export const Item = styled.li`
  padding: 5px;
`

export const InvisibleButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: block;
`