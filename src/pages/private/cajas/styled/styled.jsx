import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;



  @media (max-width: 1107px) {
    justify-content: center;
  }
  
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
  }
`

export const Item = styled.li`
  display: flex;
  border-top: 5px solid ${props => props.color};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  align-items: center;
  height: 80px;
  min-width: 200px;
  margin: 5px;
  `

export const LetrasChicas = styled.span`
  font-size: 0.6rem;
  font-weight: bold;
  color : gray;
`

export const Moneda = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

export const Titulo = styled.p`
  text-align: left;
  font-size: 0.8rem;
`

export const Container = styled.div`
  display: flex;
`

export const Cajas = styled.div`
  width: 100%;
`

export const Separator = styled.div`

  @media (max-width: 1107px) {
    width: 100%;
    height: 10px;
    background-color: transparent;
    border: none;
  }

  @media (max-width: 650px) {
    height: 20px;
  } 
`;

export const Lista = styled.ul`
  list-style: none;
`
