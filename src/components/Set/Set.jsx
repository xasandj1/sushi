import React from "react";
import images from "../../constants/images";
import {
  Slider,
  SliderCard,
  SliderCards,
  SliderImg,
  SliderTitle,
  SliderTitle2,
  SliderCardTitle,
  SliderCardTxt,
  SliderButtons,
  SliderBtn,
  SliderButtonsTitle,
} from "./set.Styled";

const Set = () => {
  return (
    <>
      <Slider>
        <SliderTitle>Новинки</SliderTitle>
        <SliderTitle2>Популярное</SliderTitle2>
      </Slider>
      <SliderCards>
        <SliderCard>
          <SliderImg src={images.selmonset} />
          <SliderCardTitle>Саломон сет</SliderCardTitle>
          <SliderCardTxt>1050 грамм, 30 кусочков</SliderCardTxt>
          <SliderButtons>
            <SliderButtonsTitle>1500 СОМ</SliderButtonsTitle>
            <SliderBtn>Хочу!</SliderBtn>
          </SliderButtons>
        </SliderCard>
        <SliderCard>
          <SliderImg src={images.philadelphia} />
          <SliderCardTitle>Филадельфия и лосось сет</SliderCardTitle>
          <SliderCardTxt>1260 грамм, 36 кусочков</SliderCardTxt>
          <SliderButtons>
            <SliderButtonsTitle>1150 СОМ</SliderButtonsTitle>
            <SliderBtn>Хочу!</SliderBtn>
          </SliderButtons>
        </SliderCard>
        <SliderCard>
          <SliderImg src={images.bigphiladelphia} />
          <SliderCardTitle>Самая большая Филадельфия</SliderCardTitle>
          <SliderCardTxt>2050 грамм, 45 кусочков</SliderCardTxt>
          <SliderButtons>
            <SliderButtonsTitle>2100 СОМ</SliderButtonsTitle>
            <SliderBtn>Хочу!</SliderBtn>
          </SliderButtons>
        </SliderCard>
      </SliderCards>
    </>
  );
};

export default Set;
