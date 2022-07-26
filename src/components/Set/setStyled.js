import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
`;
export const SliderTitle = styled.a`
  margin: 0 15px;
  font-weight: 500;
  font-size: 24px;
  color: var(--black);
  &:hover {
    color: unset;
  }
`;
export const SliderTitle2 = styled.a`
  font-weight: 500;
  margin: 0 15px;
  font-size: 24px;
  line-height: 30px;
  text-decoration-line: underline;
  color: var(--grey);
  &:hover {
    color: unset;
  }
`;
export const SliderCards = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px 20px;
`;
export const SliderCard = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  max-width: 290px;
  width: 100%;
  margin: 0px 20px;
  min-height: 385px;
  height: 100%;  
`;
export const SliderImg = styled.img`
  max-width: 253px;
  width: 100%;
  margin: 1px 20px;
`;
export const SliderCardTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: var(--black);
  margin: 15px 0 15px 17px;
  max-width: 180px;
  width: 100%;
  height: 80px;
`;
export const SliderCardTxt = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: var(--grey);
  margin: 30px 20px;
  border-bottom: 1px solid var(--grey);


`;
export const SliderButtons = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 10px 13px 10px;
`;
export const SliderButtonsTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: var(--black);
  margin: 0 5px;
`;
export const SliderBtn = styled.button`
  margin: 0 5px;
  font-weight: 500;
  font-size: 24px;
  color: var(--white);
  background-color: var(--darkorange);
  padding: 5px 40px;
  border-radius: 5px;
  border: none;
`;
export const SliderBottom = styled.div`
  
`;
export const SliderInfo = styled.div`
  
`;
export const SliderInfoTitle = styled.h2`
  font-weight: 700;
font-size: 24px;
line-height: 30px;
color: var(--grey);
`;
export const SliderInfoTxt = styled.p`
  font-weight: 400;
font-size: 18px;
line-height: 20px;
color: var(--grey);
max-width: 950px;
width: 100%;
margin-top: 15px;
`;
export const SliderInfoList = styled.ul`
    font-weight: 400;
font-size: 18px;
line-height: 20px;
color: var(--grey);
max-width: 950px;
width: 100%;
margin: 20px 15px;
`;
export const SliderInfoJobTitle = styled.li`
    font-weight: 400;
font-size: 18px;
line-height: 20px;
color: var(--grey);
max-width: 950px;
width: 100%;
margin-left: 20px;
`;
export const SliderInfoJobTxt = styled.li`
    font-weight: 400;
font-size: 18px;
line-height: 20px;
color: var(--grey);
max-width: 950px;
width: 100%;
list-style: none;
margin-top: 10px;
background: linear-gradient(180deg, rgba(242, 242, 242, 0) 0%, #F2F2F2 100%);
`;
