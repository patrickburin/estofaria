import * as C from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import logoInstagram from "/src/images/logoInstagram.png";
import logoMaps from "/src/images/logoMaps.png";

const Footer = () => {
  const links = {
    whatsApp: "https://api.whatsapp.com/send?phone=5548996885969",
    instagram: "https://www.instagram.com/estofariadoananias/",
    maps: "https://maps.app.goo.gl/aEAPT8A1ZebWygFJ9",
  };

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <C.Container>
      <div
        className="icon"
        onClick={() => {
          handleClick(links.whatsApp);
        }}
      >
        <FaWhatsapp size={50} color="#25d366" />
        (48) 9 9688-5969
      </div>
      <div
        className="icon"
        onClick={() => {
          handleClick(links.instagram);
        }}
      >
        <img src={logoInstagram} alt="Logo Instagram" />
        @estofariadoananias
      </div>
      <div
        className="icon"
        onClick={() => {
          handleClick(links.maps);
        }}
      >
        <img src={logoMaps} alt="Logo Maps" />
        Localização
      </div>
    </C.Container>
  );
};

export default Footer;
