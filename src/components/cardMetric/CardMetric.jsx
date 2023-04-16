import { Card, Titulo, Moneda, Small, Container } from "./styled";

const CardMetric = (pops) => {
  const { color, titulo, value, moneda } = pops;

  return (
    <Card color={color}>
      <Container>
        <Titulo>
          <Small>{titulo}</Small>
        </Titulo>
        <Moneda>
          $ {value} <Small>{moneda}</Small>
        </Moneda>
      </Container>
    </Card>
  );
};

export default CardMetric;
