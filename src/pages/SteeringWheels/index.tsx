interface SteeringWheelsProps {
  title: string;
  imageSteeringWheels: string | string[];
}

//styles
import * as C from "./styles";
import * as S from "../Home/styles";

//components
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import Card from "../../components/Card";
import ShowImage from "../../components/ShowImage";
import { VisibilityContext } from "../../AppContext";

//react
import { useState, useContext } from "react";

//images path
import { imagesFiat, imagesChevrolet } from "../../ImagesPath";

const SteeringWheels = () => {
  const { showSteeringWheels, setShowSteeringWheels } =
    useContext(VisibilityContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<string[]>([]);

  const handleCar = ({ title, imageSteeringWheels }: SteeringWheelsProps) => {
    setTitle(title);
    setImage(imageSteeringWheels as string[]);
    setShowSteeringWheels(!showSteeringWheels);
  };

  return (
    <S.Content>
      <TopBar />
      <div className="divider">
        <NavBar />
        <div className="content">
          {showSteeringWheels ? (
            <C.SteeringWheels>
              <Card
                title="FIAT 147"
                image="src/images/eeeee.jpg"
                onClick={() => {
                  handleCar({
                    title: "fiat 147",
                    imageSteeringWheels: imagesFiat,
                  });
                }}
              />
              <Card
                title="chevrolet"
                image="src/images/carro.jpeg"
                onClick={() => {
                  handleCar({
                    title: "chevrolet",
                    imageSteeringWheels: imagesChevrolet,
                  });
                }}
              ></Card>
            </C.SteeringWheels>
          ) : (
            <C.SteeringWheel>
              <ShowImage title={title} images={image} />
            </C.SteeringWheel>
          )}
        </div>
      </div>
    </S.Content>
  );
};

export default SteeringWheels;
