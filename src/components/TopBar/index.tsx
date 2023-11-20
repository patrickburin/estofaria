//Styles
import * as C from "./styles";

//React
import { useNavigate } from "react-router-dom";
import { useChecked } from "../../context";

//Components
import ButtonMenu from "../ButtonMenu";

const TopBar = () => {
  const { checked, setChecked } = useChecked();
  const navigate = useNavigate();

  const handleButton = () => {
    setChecked(!checked);
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <C.Container>
      <ButtonMenu checked={checked} onChange={handleButton} />
      <img
        src="/src/images/logo.png"
        alt="Logo"
        className="logo"
        onClick={handleNavigate}
      />
    </C.Container>
  );
};

export default TopBar;
