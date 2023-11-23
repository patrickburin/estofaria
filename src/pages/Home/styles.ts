import styled from "styled-components";
import { device } from "../../device";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #3e3e3e;

  .content {
    display: flex;
    width: 90%;
    flex-direction: column;
    gap: 30px;
    margin-top: 90px;
    margin-left: 105px;
    background-color: #3e3e3e;
  }

  .divider {
    display: flex;
    gap: 20px;
    flex-direction: row;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media ${device.mobile} {
    .content {
      margin-left: 0px;
    }

    .divider {
      justify-content: center;
      gap: 0;
    }
  }
`;

export const AreaText = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  border-bottom: 2px solid #a82525;
  border-right: 2px solid #a82525;
  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.2);
  background: #353535;

  .title {
    display: flex;
    align-items: center;
    font-size: 26px;
    font-weight: bold;
    color: #a82525;
  }

  .text {
    display: flex;
    align-items: center;
    text-align: justify;
    color: #ffffff;
  }

  @media ${device.mobile} {
    width: auto;
    padding: 15px 20px;

    .title {
      font-size: 30px;
    }

    .text {
      font-size: 22px;
    }
  }
`;

export const Swiper = styled.div`
  display: flex;
  width: auto;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #a82525;
  }

  .swiper-pagination-bullet {
    background-color: #a82525;
  }
`;
