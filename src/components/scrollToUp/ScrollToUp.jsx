import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ButtonUp } from "./styled";

const ScrollToUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const actionScrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ButtonUp visible={visible} onClick={actionScrollToUp}>
      <AiOutlineArrowUp color="white" size={34} />
    </ButtonUp>
  );
};
export default ScrollToUp;
