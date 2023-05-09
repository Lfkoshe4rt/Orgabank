import { Select as SelectStyled } from "./styled";

const Select = ({ children, ...props }) => {
  return <SelectStyled {...props}>{children}</SelectStyled>;
};

export default Select;
