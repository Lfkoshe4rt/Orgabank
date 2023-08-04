import { Input as InputStyled } from "./styled/styled";

const Input = (props) => {
  const { type, name, placeholder, value, defaultValue, required, readOnly } =
    props;

  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      required={required}
      readOnly={readOnly ? true : false}
    />
  );
};

export default Input;
