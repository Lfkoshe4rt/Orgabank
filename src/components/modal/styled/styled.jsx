import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

/** hover AiOutlineClose */
export const IconClose = styled(AiOutlineClose)`
  font-size: 26px;
  color: white;

  &:hover {
    color: #bdbdbd;
  }
`;

export const Animation = styled.div`
  animation: fadeIn 0.4s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 3;
  border-radius: 10px;

  @media (max-width: 820px) {
    width: 600px;
  }

  @media (max-width: 620px) {
    width: 400px;
  }

  @media (max-width: 420px) {
    width: 300px;
  }
`;

export const Title = styled.h2`
  font-size: 23px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px;

  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #4caf50;
`;

export const BodyModal = styled.div`
  padding: 0 10px 10px 10px;
`;
