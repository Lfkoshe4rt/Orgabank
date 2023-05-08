import { Link } from "react-router-dom";
import styled from "styled-components";

let devices = {
  mobile: "650px",
};

export const Nav = styled.nav`
  display: flex;
  background-color: #343a40;

  @media (max-width: ${devices.mobile}) {
    display: block;
    height: 30%;
  }
`;

export const Button = styled.button`
  display: none;
  background: none;
  border: none;
  margin-right: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${devices.mobile}) {
    display: block;
  }
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
`;

export const Menu = styled.div`
  display: none;
  flex: content;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${devices.mobile}) {
    display: ${(props) => (props.active ? "flex" : "none")};
    margin-left: 4%;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-start !important;
    transition: 0.5s ease;
  }

  @media (min-width: ${devices.mobile}) {
    display: flex !important;
    flex: content;
    justify-content: flex-end;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color || "#666666"};
  font-size: ${(props) => props.size || "1rem"};
  vertical-align: ${(props) => props.verticalAlign || "baseline"};
  letter-spacing: 1px;
  padding: 0 10px;
  margin: 2px;
  margin-left: ${(props) => props.marginLeft || "0"};

  &:hover {
    color: white;
    text-decoration: ${(props) => props.decoration || "underline"};
  }

  @media (max-width: ${devices.mobile}) {
    margin-left: 0;
    padding: 5px 0;
  }
`;

export const Title = styled(Link)`
  color: #999999;
  font-size: 1.7rem;
  padding: 0 10px;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export const Logout = styled(Link)`
  color: red;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 1rem;
  margin-left: 20px;
  padding: 0 10px;

  &:hover {
    color: #b30000;
  }

  @media (max-width: ${devices.mobile}) {
    margin-left: 0;
    margin-bottom: 5px;
    padding: 15px 0;
  }
`;

export const Center = styled.div`
  display: flex;
  vertical-align: middle;
`;
