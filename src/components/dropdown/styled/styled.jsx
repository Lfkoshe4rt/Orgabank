import styled from "styled-components";

const device = {
  mobile: "650px",
};

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 1rem;
`;

export const Dropbtn = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px;
  border: none;
  cursor: pointer;
  margin-left: 1.4rem;

  @media (max-width: ${device.mobile}) {
    min-width: 200px;
    color: #4caf50;
    background-color: transparent;
    width: 90px;
    padding: 10px 0;
    margin-bottom: 5px;
    margin-left: 0;
  }

  &:hover {
    color: #67d86b;
  }

  &:focus {
    color: #67d86b;
  }
`;

export const DropDownContent = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  position: absolute;
  background-color: rgb(242, 242, 242);
  right: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.7);
  z-index: 1;
  border-radius: 0 0 5px 5px;
  min-width: 200px;

  a {
    margin: 0;
    padding: 0;
  }

  div {
    margin: 15px;
  }
`;

export const Center = styled.div`
  display: flex;
  vertical-align: middle;
`;
