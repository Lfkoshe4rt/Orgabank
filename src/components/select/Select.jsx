import { Select as SelectStyled } from "./styled";

const Select = (props) => {
  const { children, name, value } = props;
  return (
    <SelectStyled name={name} defaultValue={value}>
      {children}
    </SelectStyled>
  );
};

export default Select;
