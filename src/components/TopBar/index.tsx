//Styles
import * as C from "./styles";

//React Icons
import { AiOutlineCar, AiOutlineHome } from "react-icons/ai";
import { GiCarSeat, GiSteeringWheel } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";

//Hooks
import { useState } from "react";

//Components
import ButtonMenu from "../ButtonMenu";

//Material UI
import { Drawer } from "@mui/material";

const TopBar = () => {
  const [checked, setChecked] = useState(false);

  const handleButton = () => {
    setChecked(!checked);
  };

  return (
    <C.Container>
      <div className="topBar">
        <ButtonMenu checked={checked} onChange={handleButton} />
        <img src="/src/assets/images/logo.png" alt="Logo" />
      </div>
      <Drawer anchor="right" open={checked} onClose={handleButton}>
        <C.NavBar>
          <div className="item">
            <AiOutlineHome size={35} />
            Início
          </div>
          <hr />
          <div className="item">
            <AiOutlineCar size={35} />
            Carros
          </div>
          <hr />
          <div className="item">
            <GiCarSeat size={35} />
            Interiores
          </div>
          <hr />
          <div className="item">
            <GiSteeringWheel size={35} />
            Volantes
          </div>
          <hr />
          <div className="item">
            <VscFeedback size={35} />
            Depoimentos
          </div>
          <hr />
        </C.NavBar>
      </Drawer>
    </C.Container>
  );
};

export default TopBar;
