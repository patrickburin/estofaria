interface CardProps {
  title: string;
  imageCar: string | string[];
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

const Cars = () => {
  const { showCars, setShowCars } = useContext(VisibilityContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<string[]>([]);

  const handleCar = ({ title, imageCar }: CardProps) => {
    setTitle(title);
    setImage(imageCar as string[]);
    setShowCars(!showCars);
  };

  return (
    <S.Content>
      <TopBar />
      <div className="divider">
        <NavBar />
        <div className="content">
          {showCars ? (
            <C.Cars>
              <Card
                title="FIAT 147"
                image="src/assets/images/eeeee.jpg"
                onClick={() => {
                  handleCar({ title: "fiat 147", imageCar: imagesFiat });
                }}
              />
              <Card
                title="chevrolet"
                image="src/assets/images/carro.jpeg"
                onClick={() => {
                  handleCar({ title: "chevrolet", imageCar: imagesChevrolet });
                }}
              ></Card>
            </C.Cars>
          ) : (
            <C.Car>
              <ShowImage title={title} images={image} />
            </C.Car>
          )}
        </div>
      </div>
    </S.Content>
  );
};

export default Cars;
