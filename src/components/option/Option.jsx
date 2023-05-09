import { Option as OptionStyled } from "./styled";

const Option = ({ children, value }) => {
  return <OptionStyled value={value}>{children}</OptionStyled>;
};

export default Option;
