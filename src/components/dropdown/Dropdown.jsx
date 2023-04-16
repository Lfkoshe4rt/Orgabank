import React, { useState } from "react";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiUser2Line,
} from "react-icons/ri";
import {
  Center,
  Dropbtn,
  Dropdown as DropdownSection,
  DropDownContent,
} from "./styled/styled";

const Dropdown = (props) => {
  const { children, title } = props;
  const [active, setActive] = useState(false);

  const handleIcon = () => {
    return active ? (
      <RiArrowDropUpLine className="ml-0" size={26} />
    ) : (
      <RiArrowDropDownLine className="ml-0" size={26} />
    );
  };

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <DropdownSection>
      <Dropbtn className="dropbtn" onClick={() => handleActive()}>
        <Center>
          <RiUser2Line size={22} className="mr-1" />
          {title}
          {handleIcon()}
        </Center>
      </Dropbtn>
      <DropDownContent active={active}>{children}</DropDownContent>
    </DropdownSection>
  );
};

export default Dropdown;
