interface NavBarProps {
  navigateTo: string;
  setShow: (show: boolean) => void;
}

//styles
import * as C from "./styles";

//device
import { device } from "../../device";

//material ui
import { Drawer } from "@mui/material";

//react icons
import { AiOutlineCar, AiOutlineHome } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";

//navigate
import { useNavigate } from "react-router-dom";

//react
import { useState, useContext } from "react";
import { useChecked } from "../../context";
import { VisibilityContext } from "../../AppContext";

const NavBar = () => {
  const { checked, setChecked } = useChecked();
  const navigate = useNavigate();

  //context
  const { showCars, setShowCars } = useContext(VisibilityContext);
  const { showSteeringWheels, setShowSteeringWheels } =
    useContext(VisibilityContext);
  const { showFeedbacks, setShowFeedbacks } = useContext(VisibilityContext);

  const handleButton = () => {
    setChecked(!checked);
  };

  const handleClick = ({ navigateTo, setShow }: NavBarProps) => {
    navigate(navigateTo);
    setShow(true);
  };

  return (
    <C.NavBar>
      <div className="icons">
        <div
          className="item"
          onClick={() => {
            navigate("/");
          }}
        >
          <AiOutlineHome size={50} />
        </div>
        <div
          className="item"
          onClick={() => {
            handleClick({ navigateTo: "/carros", setShow: setShowCars });
          }}
        >
          <AiOutlineCar size={50} />
        </div>

        <div
          className="item"
          onClick={() => {
            handleClick({
              navigateTo: "/volantes",
              setShow: setShowSteeringWheels,
            });
          }}
        >
          <GiSteeringWheel size={50} />
        </div>

        <div
          className="item"
          onClick={() => {
            handleClick({
              navigateTo: "/feedbacks",
              setShow: setShowFeedbacks,
            });
          }}
        >
          <VscFeedback size={50} />
        </div>
      </div>

      <Drawer anchor="left" open={checked} onClose={handleButton}>
        <C.Drawer>
          <div
            className="item"
            onClick={() => {
              navigate("/");
              handleButton();
            }}
          >
            <AiOutlineHome size={40} />
            Home
          </div>
          <hr />
          <div
            className="item"
            onClick={() => {
              navigate("/carros");
              handleButton();
            }}
          >
            <AiOutlineCar size={40} />
            Carros
          </div>
          <hr />
          <div
            className="item"
            onClick={() => {
              navigate("/volantes");
              handleButton();
            }}
          >
            <GiSteeringWheel size={40} />
            Volantes
          </div>
          <hr />
          <div
            className="item"
            onClick={() => {
              navigate("/feedbacks");
              handleButton();
            }}
          >
            <VscFeedback size={40} />
            Feedbacks
          </div>
          <hr />
        </C.Drawer>
      </Drawer>
    </C.NavBar>
  );
};

export default NavBar;
