import styled from "styled-components";

export const SideBar = styled.aside `
width: 16%;
position: fixed;
top: 0;
right: 0;
height: 100%;
background: var(--white);
padding: 50px 0;
`

export const SidebarContent = styled.div `
    
`
export const Content = styled.div `
display: flex;
align-items: center;
flex-direction: column;
background: var(--body);
padding: 20px 4px;
border-radius: 5px 5px 0px 0px;
`
export const SidebarTitle = styled.h2 `
font-weight: 500;
font-size: 24px;
color: var(--black);
text-align: center;
`
export const SidebarTxt = styled.p `
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: var(--grey);
padding-top: 10px;
`
export const Button = styled.button `
font-weight: 400;
font-size: 14px;
color: var(--body);
width: 100%;
border-radius: 0px 0px 5px 5px;
border: none;
background: var(--orange);
padding: 12px 20px;
`
export const Asidemap = styled.iframe`
width: 100%;
height: 150px;
padding: 20px 0 0 0;
`
export const AsideInfo = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: var(--body);
padding: 30px 25px;
`
export const AsideInfoTitle = styled.h2`
font-weight: 500;
font-size: 24px;
color: var(--black);
`
export const AsideInfoTxt = styled.p`
font-weight: 400;
font-size: 18px;
color: var(--grey);

`
export const AsideInfoImg = styled.img`
background: var(--orange);
position: absolute;
bottom: 33%;
padding: 20px 17px;
border-radius: 50%;


`
export const AsideInfoDiv = styled.div`
position: relative;

`

