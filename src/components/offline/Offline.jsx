import { useIsOnline } from "react-use-is-online";

const Offline = ({ children }) => {
  const { isOffline } = useIsOnline();

  return isOffline ? (
    <div className="offline">
      <h1>Offline</h1>
    </div>
  ) : (
    children
  );
};

export default Offline;
