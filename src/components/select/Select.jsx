import { Select as SelectStyled } from "./styled";

const Select = (props) => {
  const { children, name, value, onChange } = props;
  return (
    <SelectStyled onChange={onChange} name={name} defaultValue={value}>
      {children}
    </SelectStyled>
  );
};

export default Select;
