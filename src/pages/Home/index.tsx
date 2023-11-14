//Styles
import * as C from "./styles";

//react
import { useEffect, useState } from "react";

//Components

//Swiper
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TopBar from "../../components/TopBar";

const Home = () => {
  const [slidePerView, setSlidePerView] = useState(5);

  const images = [
    { id: 1, image: "src/assets/images/logo.png" },
    { id: 2, image: "src/assets/images/carro.jpeg" },
    { id: 3, image: "src/assets/images/carro2.jpeg" },
    { id: 4, image: "src/assets/images/carro3.webp" },
    { id: 5, image: "src/assets/images/carro4.jpg" },
    { id: 6, image: "src/assets/images/carro5.webp" },
    { id: 7, image: "src/assets/images/carro.jpeg" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidePerView(1);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSlidePerView(3);
      } else {
        setSlidePerView(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <C.Content>
      <div className="divTopBar">
        <TopBar />
      </div>
      <div className="content">
        <C.AreaText>
          <div className="title">Quem somos?</div>
          <div className="text">
            A Estofaria do Ananias, localizada em Araranguá é uma empresa local
            com mais de duas décadas de tradição no mercado. Especializada em
            estofaria automotiva, destaca-se pela alta qualidade de seus
            produtos e pelo compromisso com a excelência, uma tradição que é
            passada de geração em geração na família que opera o negócio.
          </div>
        </C.AreaText>
        <C.Swiper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={slidePerView}
            navigation
            pagination
            autoplay={{ delay: 3000 }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <img src={image.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </C.Swiper>
        <C.AreaText>
          <div className="title">Quem somos?</div>
          <div className="text">
            A Estofaria do Ananias, localizada em Araranguá é uma empresa local
            com mais de duas décadas de tradição no mercado. Especializada em
            estofaria automotiva, destaca-se pela alta qualidade de seus
            produtos e pelo compromisso com a excelência, uma tradição que é
            passada de geração em geração na família que opera o negócio. A
            Estofaria do Ananias, localizada em Araranguá é uma empresa local
            com mais de duas décadas de tradição no mercado. Especializada em
            estofaria automotiva, destaca-se pela alta qualidade de seus
            produtos e pelo compromisso com a excelência, uma tradição que é
            passada de geração em geração na família que opera o negócio.
          </div>
        </C.AreaText>
      </div>
    </C.Content>
  );
};

export default Home;
