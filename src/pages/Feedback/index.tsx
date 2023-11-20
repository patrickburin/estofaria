interface FeedbackProps {
  title: string;
  imageFeedback: string | string[];
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

const Feedback = () => {
  const { showFeedbacks, setShowFeedbacks } = useContext(VisibilityContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<string[]>([]);

  const handleCar = ({ title, imageFeedback }: FeedbackProps) => {
    setTitle(title);
    setImage(imageFeedback as string[]);
    setShowFeedbacks(!showFeedbacks);
  };

  return (
    <S.Content>
      <TopBar />
      <div className="divider">
        <NavBar />
        <div className="content">
          {showFeedbacks ? (
            <C.Feedbacks>
              <Card
                title="FIAT 147"
                image="src/images/eeeee.jpg"
                onClick={() => {
                  handleCar({
                    title: "fiat 147",
                    imageFeedback: imagesFiat,
                  });
                }}
              />
              <Card
                title="chevrolet"
                image="src/images/carro.jpeg"
                onClick={() => {
                  handleCar({
                    title: "chevrolet",
                    imageFeedback: imagesChevrolet,
                  });
                }}
              ></Card>
            </C.Feedbacks>
          ) : (
            <C.Feedback>
              <ShowImage title={title} images={image} />
            </C.Feedback>
          )}
        </div>
      </div>
    </S.Content>
  );
};

export default Feedback;
