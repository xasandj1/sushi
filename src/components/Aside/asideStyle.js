import styled from "styled-components";

export const AsideBar = styled.aside`

width: 12%;
position: fixed;
top: 0;
left: 0;
height: 100%;
background: var(--white);
`

export const AsideContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 30px;
`

export const AsideLogo = styled.a`
display: flex;
align-content: center;
justify-content: center;
width: 130px;
height: 130px;
`

export const AsideLogoImg = styled.img`
pointer-events: none;
user-select: none;
`

export const AsideList = styled.ul`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`
export const AsideItem = styled.li`
 margin: 10px 0;
 color: var(--black);
 list-style: none;
`
export const AsideLink = styled.a`
color: var(--black);
font-weight: 400;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;
    &:hover{
        color: var(--orange);
        cursor: inherit;
    }
`
export const AsideLinkImg = styled.img`
pointer-events: none;
user-select: none;
margin-right: 20px;
`
export const AsideMenu = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
