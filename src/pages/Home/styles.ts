import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 100vh;
  max-width: 100vw;
  background-color: #3e3e3e;

  .content {
    display: flex;
    width: 90%;
    flex-direction: column;
    gap: 30px;
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
    margin-bottom: 30px;
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
