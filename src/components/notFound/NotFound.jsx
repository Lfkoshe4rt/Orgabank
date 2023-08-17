import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../Routes/routes";
import { Container, ContentNumbers, Text, MoveText, Button } from "./styled";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(PrivateRoutes.CAJAS, { replace: true });
  };

  return (
    <Container>
      <ContentNumbers>
        <Text size={100}>
          <MoveText delay={3} size={10}>
            4
          </MoveText>
          <MoveText delay={6} size={10}>
            0
          </MoveText>
          <MoveText delay={3} size={10}>
            4
          </MoveText>
        </Text>

        <Text className="ml-3">Not Found</Text>
      </ContentNumbers>

      <Button onClick={handleNavigate}>Volver a la pagina de inicio</Button>
    </Container>
  );
};

export default NotFound;
