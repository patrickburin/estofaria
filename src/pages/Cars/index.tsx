//styles
import * as C from "./styles";
import * as S from "../Home/styles";

//components
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import Card from "../../components/Card";

const Cars = () => {
  return (
    <S.Content>
      <TopBar />
      <div className="divider">
        <NavBar />
        <div className="content">
          <C.Cars>
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
            <Card title="título" image="src\assets\images\eeeee.jpg" />
          </C.Cars>
        </div>
      </div>
    </S.Content>
  );
};

export default Cars;
