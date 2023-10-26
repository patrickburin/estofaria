//Styles
import * as C from "./styles";

// Components
import TopBar from "../TopBar";
import Home from "../Home";

// Hooks
import { useState } from "react";

const Main = () => {
  const [navBar, setNavBar] = useState(false);

  return (
    <C.Main>
      <C.TopBar>
        <TopBar navBar={navBar} setNavBar={setNavBar} />
      </C.TopBar>

      <C.Content>
        <Home navBar={navBar} />
      </C.Content>
    </C.Main>
  );
};

export default Main;
