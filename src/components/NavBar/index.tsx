//Styles
import * as C from "./styles";

//React-icons
import { AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <C.Container>
      <C.Item>
        <AiOutlineHome />
        Início
      </C.Item>
    </C.Container>
  );
};

export default NavBar;
