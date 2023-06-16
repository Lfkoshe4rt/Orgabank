import React, { useRef, useState } from "react";
import { RiArrowDropDownLine, RiUser2Line } from "react-icons/ri";
import {
  Center,
  DropDownContent,
  Dropbtn,
  Dropdown as DropdownSection,
} from "./styled/styled";
import { useEffect } from "react";

const Dropdown = (props) => {
  const { children, title } = props;
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleActive = () => setActive(!active);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActive(false);
      }
    });
  }, []);

  return (
    <DropdownSection ref={dropdownRef}>
      <Dropbtn className="dropbtn" onClick={() => handleActive()}>
        <Center>
          <RiUser2Line size={22} className="mr-1" />
          {title}
          <RiArrowDropDownLine className="ml-0" size={26} />
        </Center>
      </Dropbtn>
      <DropDownContent active={active}>{children}</DropDownContent>
    </DropdownSection>
  );
};

export default Dropdown;
