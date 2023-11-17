interface ShowImageProps {
  title: string;
  images: string[];
}

//styles
import * as C from "./styles";

const ShowImage = ({ title, images }: ShowImageProps) => {
  return (
    <C.Container>
      <div className="title">{title}</div>
      <div className="images">
        {images &&
          images.map((image, index) => (
            <img key={index} src={image} alt={`Imagem ${index + 1}`} />
          ))}
      </div>
    </C.Container>
  );
};

export default ShowImage;
