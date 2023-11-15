interface CardProps {
  title: string;
  image: string;
}

//styles
import * as C from "./styles";

const Card = ({ title, image }: CardProps) => {
  return (
    <C.Card>
      <div className="title">{title}</div>
      <div className="image">
        <img src={image} />
      </div>
    </C.Card>
  );
};

export default Card;
