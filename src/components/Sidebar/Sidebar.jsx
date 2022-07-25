import React from "react";
import images from "../../constants/images.jsx";
import {
  SideBar,
  SidebarContent,
  SidebarTitle,
  Content,
  SidebarTxt,
  Button,
  Asidemap,
  AsideInfo,
  AsideInfoTitle,
  AsideInfoTxt,
  AsideInfoImg,
  AsideInfoDiv,
} from "./sidebarStyle.js";

const Sidebar = () => {
  return (
    <>
      <SideBar>
        <SidebarContent>
          <div className="container">
            <Content>
              <SidebarTitle>Ваша корзина пуста.</SidebarTitle>
              <SidebarTxt>Добавьте же скорее что-нибудь!</SidebarTxt>
            </Content>
            <Button>Бесплатная доставка от 800 СОМ</Button>
            <AsideInfoDiv>
              <Asidemap
                title="xaxaxa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.5026328192!2d69.13928388241891!3d41.28251254743703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1658581564944!5m2!1sru!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></Asidemap>
              <AsideInfo>
                <AsideInfoImg src={images.map} alt="" />

                <AsideInfoTitle>Укажите адрес</AsideInfoTitle>
                <AsideInfoTxt>И узнайте время доставки</AsideInfoTxt>
              </AsideInfo>
            </AsideInfoDiv>
          </div>
        </SidebarContent>
      </SideBar>
    </>
  );
};

export default Sidebar;
