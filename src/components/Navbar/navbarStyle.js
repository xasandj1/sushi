import styled from "styled-components";

export const Header = styled.header `
width: 95%;
margin-left: 20px;
`
export const Navbarwrapper = styled.nav `

`
export const NavContent = styled.div `
display: flex;
border-bottom: 1px solid var(--grey);
`
export const Content = styled.div `

`
export const Contentdiv = styled.div `
padding: 6px 30px 8px 0;
display: flex;
align-items: center;
flex-direction: column;
max-width: 345px;
width: 100%;
border-right: 1px solid var(--grey);
`
export const ContentdivTitle = styled.h3 `
  font-weight: 500;
font-size: 20px;
line-height: 22px;
color: var(--dark);
`
export const ContentLink = styled.a `
  font-weight: 500;
font-size: 20px;
line-height: 100%;
color: #FF9846;
&:hover{
    color: var(--orange);
}
`
export const ContentdivTxt = styled.p `
 font-weight: 500;
font-size: 18px;
color: var(--grey);
 padding-top: 5px;
`
export const ContentForm = styled.form `
 display: flex;
 align-items: flex-start;
 justify-content: center;
 flex-direction: column;
 padding-left: 10px;
`
export const ContentSearch = styled.div `
 display: flex;
 justify-content: space-between;
 padding-left: 10px;
 flex: 1;
`

export const Label = styled.label `
 font-weight: 300;
font-size: 14px;
line-height: 17px;
color: var(--grey);
`
export const Title = styled.h3 `
 font-weight: 400;
font-size: 18px;
color: var(--black);
`
export const Input = styled.input `
 
`
export const ContentSearchLink = styled.a `
 font-weight: 400;
font-size: 18px;
line-height: 22px;
color: var(--black);
display: flex;
align-items: center;
justify-content: center;
transition: .1s;
margin: 0 5px 0 5px;
&:nth-child(2){
    margin: 0 65px 0 5px;
}
    &:hover{
        color: var(--orange);
    }
`
export const ContentRight = styled.div `
 font-weight: 400;
font-size: 18px;
line-height: 22px;
color: var(--black);
display: flex;
align-items: center;
justify-content: center;
`
export const ContentRightImg = styled.img `

`
