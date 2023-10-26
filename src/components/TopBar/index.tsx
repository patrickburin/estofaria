interface IProps {
  navBar: boolean;
  setNavBar: (value: boolean) => void;
}

//Styles
import * as C from "./styles";

//Hooks
import { useState } from "react";

//Components
import ButtonMenu from "../ButtonMenu";

const TopBar = ({ navBar, setNavBar }: IProps) => {
  const [checked, setChecked] = useState(false);

  const handleButton = () => {
    setChecked(!checked);
    if (!checked) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  return (
    <C.Container>
      <ButtonMenu checked={checked} onChange={handleButton} />
      <img src="/src/assets/images/logo.png" alt="Logo" />
    </C.Container>
  );
};

export default TopBar;
