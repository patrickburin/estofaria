interface IProps {
  navBar: boolean;
}

import { Drawer } from "@mui/material";
//Styles
import * as C from "./styles";

const Home = ({ navBar }: IProps) => {
  return (
    <C.Container>
      <div> aloooo</div>
      {navBar && <div>alo deu certo porra</div>}
      <Drawer anchor="left" open={navBar}>
        PORRA VAMO
      </Drawer>
      <div>alo</div>
    </C.Container>
  );
};

export default Home;
