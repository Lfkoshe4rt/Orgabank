import styled from "styled-components";

export const ButtonUp = styled.button`
  display: flex;
  position: fixed;
  bottom: 20px;
  right: 25px;
  z-index: 1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #5dc75d;
  color: black;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  &:hover {
    background-color: #489748;
    color: white;
  }
`;
