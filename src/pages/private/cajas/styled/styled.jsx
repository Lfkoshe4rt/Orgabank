import styled from "styled-components";

export const Header = styled.div`

display: flex;
justify-content: space-between;
flex-wrap: wrap;


@media (max-width: 918px) {
   justify-content: center;
}
`


export const List = styled.ul`
  list-style: none;
  margin-top: 10px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-top: 0;
    width: 100%;
  }

  

`

export const Item = styled.li`
  font-size: 1.1rem;
  border-top: 5px solid ${props => props.color};
  border-radius: 5px;
  width: 220px;
  height: 80px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  margin: 10px;

  @media (max-width: 1000px) {
    margin: 2px;
  }

  @media (max-width: 650px) {
    margin-top: 20px;
    width: 100%;
  }


 
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
  margin: 0;
  font-size: 0.8rem;
`

export const Container = styled.div`
  display: flex;
  margin: 10px 0;
`

export const Cajas = styled.div`
  width: 100%;
`

export const Menu = styled.div`
  width: 20%;
  margin-right: 10px;
  background-color: red;S
`