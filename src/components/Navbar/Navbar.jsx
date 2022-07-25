import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import {
  Content,
  Contentdiv,
  ContentdivTitle,
  ContentdivTxt,
  ContentForm,
  ContentLink,
  ContentRight,
  ContentRightImg,
  ContentSearch,
  ContentSearchLink,
  Header,
  Label,
  Navbarwrapper,
  NavContent,
  Title,
} from "./navbarStyle";

const Navbar = () => {
  return (
    <>
      <Header>
        <Navbarwrapper>
          <div className="container">
            <NavContent>
              <Content>
                <Contentdiv>
                  <ContentdivTitle>Наш телефон</ContentdivTitle>
                  <ContentLink href="tel:+996 705 188 955">
                    +996 705 188 955
                  </ContentLink>
                  <ContentLink href="tel:+996 555 188 955">
                    +996 555 188 955
                  </ContentLink>
                  <ContentdivTxt>работаем с 10:00 до 00:00</ContentdivTxt>
                </Contentdiv>
              </Content>
              <ContentSearch>
                <ContentForm>
                  <Label>Город:</Label>
                  <Title>Ташкент</Title>
                </ContentForm>
                <ContentRight>
                  <ContentSearchLink as={Link} to="/">
                    Отзывы
                  </ContentSearchLink>
                  <ContentSearchLink as={Link} to="/">
                    Доставка и оплата
                  </ContentSearchLink>
                  <ContentRightImg src={images.search} />
                </ContentRight>
              </ContentSearch>
            </NavContent>
          </div>
        </Navbarwrapper>
      </Header>
    </>
  );
};

export default Navbar;
