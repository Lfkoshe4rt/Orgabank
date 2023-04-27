import styled from "styled-components";

const Invisible = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function InvisibleButton({ children, onClick }) {
  return <Invisible onClick={onClick}>{children}</Invisible>;
}
