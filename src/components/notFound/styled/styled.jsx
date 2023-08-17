import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;
  height: calc(100vh - 300px);
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.size || 50}px;
  font-weight: bold;
  color: #4caf50;
  text-shadow: 0 0 50px #68d66c;

  text-align: center;
`;

export const MoveText = styled.span`
  position: relative;
  display: inline-block;
  animation: moveLetter 1s ease-in-out infinite alternate;
  animation-delay: ${(props) => props.delay || 0}s;
  font-weight: bold;
  @keyframes moveLetter {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(${(props) => props.size || 10}px);
    }
  }
`;

export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #68d66c;
  }
`;

export const ContentNumbers = styled.div`
  display: flex;
  align-items: baseline;

  @media (max-width: 500px) {
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
