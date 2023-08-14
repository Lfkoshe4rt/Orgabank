import { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine, RiWalletLine } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import menu from "../../assets/images/menu.svg";
import { PrivateRoutes, PublicRoutes } from "../../Routes/routes";
import Dropdown from "../dropdown/Dropdown";
import {
  Button,
  Center,
  Logout,
  Menu,
  Nav,
  NavLink,
  Title,
  TopNav,
} from "./styled";
import { useAppSelector } from "../../hooks/store";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(PrivateRoutes.HOME);
  const { username } = useAppSelector((state) => state.user);

  useEffect(() => {
    setSelected(window.location.pathname.slice(1));
  });

  const handleColor = (path) => {
    return path === selected ? "white" : "#999999";
  };

  const handleSelected = (path) => {
    setSelected(path);
  };

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <Nav>
      <TopNav>
        <Title
          onClick={() => handleSelected(PrivateRoutes.CAJAS)}
          color={handleColor(PrivateRoutes.CAJAS)}
          to={PrivateRoutes.CAJAS}
          className="inter-bold ml-1"
        >
          ORGA BANK
        </Title>
        <Button onClick={() => handleActive()}>
          <img className="mr-1" src={menu} />
        </Button>
      </TopNav>
      <Menu active={active}>
        <NavLink
          onClick={() => {
            handleSelected(PrivateRoutes.CAJAS), handleActive();
          }}
          color={handleColor(PrivateRoutes.CAJAS)}
          to={PrivateRoutes.CAJAS}
        >
          <Center>
            <RiWalletLine size={22} className="mr-1" />
            Cajas
          </Center>
        </NavLink>

        <NavLink
          onClick={() => {
            handleSelected(PrivateRoutes.CAPITAL), handleActive();
          }}
          color={handleColor(PrivateRoutes.CAPITAL)}
          to={PrivateRoutes.CAPITAL}
        >
          <Center>
            <RiMoneyDollarCircleLine size={22} className="mr-1" />
            Capital
          </Center>
        </NavLink>

        <Dropdown handleActive={handleActive} title={username}>
          <Logout
            onClick={() => handleSelected(PublicRoutes.LOGIN)}
            to={PublicRoutes.LOGIN}
          >
            <Center className="inter-medium">
              <RxExit size={20} className="mr-1" />
              Cerrar sesión
            </Center>
          </Logout>
        </Dropdown>
      </Menu>
    </Nav>
  );
};

export default Navbar;
