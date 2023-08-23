import { useIsOnline } from "react-use-is-online";
import styled from "styled-components";

const OfflineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: green;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }

  button:hover {
    background-color: #0a0;
  }

  .resaltar {
    color: red;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
`;

const Offline = ({ children }) => {
  const { isOffline } = useIsOnline();

  return isOffline ? (
    <OfflineContainer className="offline">
      <h1>
        Su dispositivo se encuentra
        <span className="resaltar"> sin conexión!</span>
      </h1>
      <button onClick={() => window.location.reload()}>Recargar página</button>
    </OfflineContainer>
  ) : (
    children
  );
};

export default Offline;
