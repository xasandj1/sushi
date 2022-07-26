import React from "react";
import images from "../../constants/images";

import {
  ChickCard,
  ChickCardImg,
  ChickCardTtile,
  Chicken,
  ChickencornTitle,
  ChickenfishsushiImg,
  ChickenImg,
  ChickenInfo,
  ChickensushiTitle,
  ChickenTitle,
  ChickMeatTtile,
} from "./foodsStyled";


const Foods = () => {
  return (
    <>
    <Chicken>
    <ChickenInfo>
      <ChickenImg src={images.chicken} />
      <ChickenTitle>Чикен</ChickenTitle>
    </ChickenInfo>
    <ChickenfishsushiImg src={images.fishsushi} />
    <ChickensushiTitle>С угрем</ChickensushiTitle>
    <ChickenInfo>
      <ChickenImg src={images.potatoes} />
      <ChickencornTitle>Корн дог</ChickencornTitle>
      
    </ChickenInfo>
    <ChickCard>
      <ChickCardImg src={images.pizza} />
      <ChickCardTtile>Пицца</ChickCardTtile>
    </ChickCard>
    <ChickCard>
      <ChickCardImg src={images.meat} />
      <ChickMeatTtile>Акции</ChickMeatTtile>
    </ChickCard>
  </Chicken>
    </>
  );
};

export default Foods;
