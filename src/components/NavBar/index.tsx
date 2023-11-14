//styles
import * as C from "./styles";

//material ui
import { Drawer } from "@mui/material";

//react icons
import { AiOutlineCar, AiOutlineHome } from "react-icons/ai";
import { GiCarSeat, GiSteeringWheel } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";

//navigate
import { useNavigate } from "react-router-dom";

//checkedContext
import { useChecked } from "../../context/checkedContext";

const NavBar = () => {
  const { checked, setChecked } = useChecked();
  const navigate = useNavigate();

  const handleButton = () => {
    setChecked(!checked);
  };

  return (
    <C.NavBar>
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
          navigate("/carros");
        }}
      >
        <AiOutlineCar size={50} />
      </div>

      <div
        className="item"
        onClick={() => {
          navigate("/interiores");
        }}
      >
        <GiCarSeat size={50} />
      </div>

      <div
        className="item"
        onClick={() => {
          navigate("/volantes");
        }}
      >
        <GiSteeringWheel size={50} />
      </div>

      <div
        className="item"
        onClick={() => {
          navigate("/feedbacks");
        }}
      >
        <VscFeedback size={50} />
      </div>

      <Drawer anchor="left" open={checked} onClose={handleButton}>
        <C.Drawer>
          <div
            className="item"
            onClick={() => {
              navigate("/");
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
            }}
          >
            <AiOutlineCar size={40} />
            Carros
          </div>
          <hr />
          <div
            className="item"
            onClick={() => {
              navigate("/interiores");
            }}
          >
            <GiCarSeat size={40} />
            Interiores
          </div>
          <hr />
          <div
            className="item"
            onClick={() => {
              navigate("/volantes");
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
