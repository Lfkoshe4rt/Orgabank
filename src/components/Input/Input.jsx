import { Input as InputStyled } from "./styled/styled";

const Input = (props) => {
  const { type, name, placeholder, value, required } = props;

  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={value}
      required={required}
    />
  );
};

export default Input;
