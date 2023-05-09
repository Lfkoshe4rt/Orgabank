import { InputGroup as InputGroupStyled } from "./styled";
import { Label } from "../label";

const InputGroup = ({ label, children }) => {
  return (
    <InputGroupStyled>
      <Label>
        {label}
        {children}
      </Label>
    </InputGroupStyled>
  );
};

export default InputGroup;
