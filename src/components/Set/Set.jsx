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
  SliderBottom,
  SliderInfo,
  SliderInfoTitle,
  SliderInfoTxt,
  SliderInfoJobTitle,
  SliderInfoList,
  SliderInfoJobTxt,
} from "./setStyled";
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
      <SliderBottom>
        <SliderInfo>
          <SliderInfoTitle>
            Заказать суши в Бишкеке
          </SliderInfoTitle>
          <SliderInfoTxt>
            Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.
            В нашем меню более 20 видов суши:
          </SliderInfoTxt>
          <SliderInfoList>
            <SliderInfoJobTitle>
              Классические с сырым лососем, тунцом, окунем.
            </SliderInfoJobTitle>
            <SliderInfoJobTitle>
              Экзотические с тигровой креветкой, морским гребешком.
            </SliderInfoJobTitle>
            <SliderInfoJobTitle>
              Пикантные с копченым лососем, угрем.
            </SliderInfoJobTitle>
          </SliderInfoList>
          <SliderInfoJobTxt>
            В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.
          </SliderInfoJobTxt>
        </SliderInfo>
      </SliderBottom>
    </>
  );
};

export default Set;
