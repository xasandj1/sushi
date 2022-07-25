import styled from "styled-components";

export const SliderWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SectionImg = styled.img`
  max-width: 710px;
  width: 100%;
  height: 95%;
  margin-top: 20px;
`;
export const SectionBox = styled.div`
  display: flex;
  align-content: center;
  position: relative;
  background: var(--white);
  border-radius: 5px;
  max-width: 1000px;
  width: 100%;
  height: 500px;
`;
export const SectionInfo = styled.div`
  position: absolute;
  display: flex;
  right: 20px;
  flex-direction: column;
  align-items: flex-end;
`;
export const SectionTitle = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  color: var(--black);
`;
export const SectionTxt = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: var(--orange);
  margin-top: 10px;
`;
export const SectionSale = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: var(--black);
  margin-top: 60px;
  &:after {
    content: "";
    position: absolute;
    width: 102px;
    height: 3px;
    background: var(--orange);
    right: 0;
    transform: rotate(-11deg);
    bottom: 67px;
  }
`;
export const SectionReal = styled.p`
  font-weight: 700;
  font-size: 35px;
  color: var(--black);
  margin-top: 4px;
`;
export const SectionBtn = styled.button`
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  color: #f2f2f2;
  background: var(--orange);
  border: none;
  padding: 10px 70px;
  border-radius: 5px;
  position: absolute;
  bottom: -100%;
  right: 20px;
`;
