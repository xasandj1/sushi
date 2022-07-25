import React from "react";
import {
  SectionBox,
  SectionBtn,
  SectionImg,
  SectionInfo,
  SectionReal,
  SectionSale,
  SectionTitle,
  SectionTxt,
  SliderWrapper,
} from "./sliderStyled";
import images from "../../constants/images";

const Slider = () => {
  return (
    <>
      <SliderWrapper>
        <SectionBox>
          <SectionImg src={images.sushibg} />
          <SectionInfo>
          <SectionTitle>"Филадельфия и лосось"</SectionTitle>
          <SectionTxt>1260 грамм, 36 кусочек</SectionTxt>
          <SectionSale>1599 СОМ</SectionSale>
          <SectionReal>599 СОМ</SectionReal>
          <SectionBtn>Хочу!</SectionBtn>
          </SectionInfo>
        </SectionBox>
      </SliderWrapper>
    </>
  );
};

export default Slider;
