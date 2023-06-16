import { Button as ButtonStyled } from "./styled";

const Button = (props) => {
  const { children, color, onClick, className, colorText, type } = props;

  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
