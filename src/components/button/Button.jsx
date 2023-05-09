import { Button as ButtonStyled } from "./styled";

const Button = (props) => {
  const { children, color, onClick, className } = props;

  return (
    <ButtonStyled onClick={onClick} color={color} className={className}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
