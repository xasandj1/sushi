import React from 'react'
import { AsideBar, AsideContent, AsideItem, AsideLink, AsideLinkImg, AsideList, AsideLogo, AsideLogoImg } from './asideStyle'
import { Link } from 'react-router-dom'
import images from '../../constants/images'
const Aside = () => {
  return (
    <>
      <AsideBar>
        <AsideContent>
          <AsideLogo as={Link} to='/'>
            <AsideLogoImg src={images.logo} />
          </AsideLogo>
          <AsideList>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.pizzaicon} />
                Пицца
              </AsideLink>
            </AsideItem>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.set} />
                Сеты
              </AsideLink>
            </AsideItem>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.wok} />
                WOK
              </AsideLink>
            </AsideItem>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.rolls} />
                Роллы
              </AsideLink>
            </AsideItem>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.sushiicon} />
                Суши
              </AsideLink>
            </AsideItem>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.soup} />
                Супы
              </AsideLink>
            </AsideItem>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.corrndog} />
                Корн доги
              </AsideLink>
            </AsideItem>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.drink} />
                Напитки
              </AsideLink>
            </AsideItem>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.sale} />
                Акции
              </AsideLink>
            </AsideItem>
            <AsideItem>
              <AsideLink as={Link} to='/'>
                <AsideLinkImg src={images.pizzaicon} />
                Пицца
              </AsideLink>
            </AsideItem>
          </AsideList>
        </AsideContent>
      </AsideBar>
    </>
  )
}

export default Aside