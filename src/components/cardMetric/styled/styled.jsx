import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  border-top: 5px solid ${(props) => props.color};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  align-items: center;
  height: 80px;
  width: 220px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 730px) {
    width: 100%;
  }
`;

export const Titulo = styled.p`
  text-align: left;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const Moneda = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Small = styled.span`
  font-size: 0.6rem;
  font-weight: bold;
  color: gray;
`;

export const Container = styled.div`
  margin-left: 10px;
`;
