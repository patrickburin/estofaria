interface CardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

//styles
import * as C from "./styles";

const Card = ({ title, image, onClick }: CardProps) => {
  return (
    <C.Card onClick={onClick}>
      <div className="title">{title}</div>
      <div className="image">
        <img src={image} />
      </div>
    </C.Card>
  );
};

export default Card;
