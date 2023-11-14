//Styles
import * as C from "./styles";

//React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//React Icons
import { AiOutlineCar, AiOutlineHome } from "react-icons/ai";
import { GiCarSeat, GiSteeringWheel } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";

//Components
import ButtonMenu from "../ButtonMenu";

//Material UI
import { Drawer } from "@mui/material";

const TopBar = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

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
          <div
            className="item"
            onClick={() => {
              navigate("/");
            }}
          >
            <AiOutlineHome size={35} />
            Início
          </div>
          <hr />
          <div
            className="item"
            onClick={() => {
              navigate("/carros");
            }}
          >
            <AiOutlineCar size={35} />
            Carros
          </div>
          <hr />
          <div
            className="item"
            onClick={() => {
              navigate("/interiores");
            }}
          >
            <GiCarSeat size={35} />
            Interiores
          </div>
          <hr />
          <div
            className="item"
            onClick={() => {
              navigate("/volantes");
            }}
          >
            <GiSteeringWheel size={35} />
            Volantes
          </div>
          <hr />
          <div
            className="item"
            onClick={() => {
              navigate("/feedbacks");
            }}
          >
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
