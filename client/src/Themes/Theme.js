import React from 'react';
import styled, { keyframes} from 'styled-components';
import theme from 'styled-theming';
import { MdHome } from "react-icons/md";
import { MdAssignment, MdInput, MdHelp, MdBrightness3, MdBrightnessHigh, MdDeleteForever, MdDoneAll, MdClear, MdModeEdit} from "react-icons/md";
import { FaTasks } from "react-icons/fa";


const backgroundBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#090A0E',
});

const backgroundHeight = theme('mode',{
  light: '100vh',
  dark: '100vh'
})
const backgroundWidth = theme('mode',{
  light: '100vw',
  dark: '100vw'
})

const fontColor = theme('mode',{
  light:"#000",
  dark:'#fff'
})

const tasktitleColor = theme('mode',{
  light:"#595959",
  dark:'#fff'
})

const modalColor = theme('mode',{
  light:"#fff",
  dark:'#090A0E'
})

const borderColor = theme('mode',{
  light:"#5F7D9A",
  dark:'#fff'
})

const textColor = theme('mode',{
  light:"#fff",
  dark:'#fff'
})

const chartColor = theme('mode',{
  light:"#5F7D9A",
  dark:'#fff'
})

const iconColor = theme('mode',{
  light:"#fff",
  dark:'#FF2511'
})

const navbarColor = theme('mode',{
  light: '#5F7D9A',
  dark: '#0C0C1E'

})

const logoColor = theme('mode',{
  light: '#fff',
  dark: '#fff'
})

const fontPadding = theme('mode',{
  light:0,
  dark:0
})

const fontMargin = theme('mode',{
  light:0,
  dark:0
})

const fontSize = theme('mode',{
  light:'19px',
  dark:'19px'
})

const cardBackground =theme('mode',{
  light:'#fff',
  dark:'#090A0E'
})

const triangleBigColor =theme('mode',{
  light:'#fff',
  dark:'#090A0E'
})

const triangleSmallColor =theme('mode',{
  light:'#fff',
  dark:'#090A0E'
})

const cardHeight = theme('mode',{
  light: '95vh',
  dark: '95vh'
})

const rectangleColor = theme('mode', {
  light: '#fff',
  dark: '#090A0E',
});

const buttonColor = theme('mode', {
  light: '#595959',
  dark: '#FF2511',
});

const widgetColor = theme('mode', {
  light: '#FBB047',
  dark: '#0C0C1E'
});

const taskWidgetColor = theme('mode', {
  light: '#5F7D9A',
  dark: '#FF2511'
});


const componentBackgroundColor = theme('mode', {
  light: '#fff',
  dark: "#090A0E"
});

const LoginButtonColor = theme('mode', {
  light: '#E47D80',
  dark: '#F5631A',
});
const LoginBackgroundColor = theme('mode', {
  light: '#5F7D9A',
  dark: '#9DA993',
});

const cardWidth = theme('mode',{
  light: '95vw',
  dark: '95vw'
})

const card1Color = theme('mode',{
  light: '#FBB047',
  dark: '#595959'
})

const  dashboardIconColor= theme('mode',{
  light: '#5F7D9A',
  dark: '#FF2511'
})

const card2Color = theme('mode',{
  light: '#E47D80',
  dark: '#007575'
})
const card3Color = theme('mode',{   
  light: '#5F7D9A',
  dark: "#0C0C1E"
})

const cardColor = theme('mode',{
  light: '#595959',
  dark: '#FF2511'
})
const rotate = keyframes`
  to {
    transform: translate(0 , -2vh)
  }
`;
const tBottom = keyframes`
  from {
    opacity:0
  }

  to {
    opacity:1
  }
`;
const circle = keyframes`
  from {
    width:32vw
  }

  to {
    width:0vw
  }
`;
export const CustomHomeIcon = styled(MdHome)`
color: ${iconColor};
font-size:40px;
margin-right:35px
`
export const CustomTaskIcon = styled(MdAssignment)`
color: ${iconColor};
font-size:40px;
margin-right:35px
`
export const CustomLogoutIcon = styled(MdInput)`
color: ${iconColor};
font-size:22px;
margin-right:38px
`
export const CustomHelpIcon = styled(MdHelp)`
color: ${dashboardIconColor};
font-size:22px;
margin:0
`
export const CustomMoonIcon = styled(MdBrightness3)`
color: ${dashboardIconColor};
font-size:22px;
margin:0
`
export const CustomSunIcon = styled(MdBrightnessHigh)`
color: ${dashboardIconColor};
font-size:22px;
margin:0
`
export const CustomEditIcon = styled(MdModeEdit)`
color: ${dashboardIconColor};
font-size:22px;
margin:0
`
export const CustomClearIcon = styled(MdClear)`
color: ${dashboardIconColor};
font-size:22px;
position: absolute;
left:10%;
top:6%
`
export const StartTaskIcon = styled(FaTasks)`
color: ${dashboardIconColor};
font-size:22px;
margin:0
`
export const DeleteIcon = styled(MdDeleteForever)`
color: ${dashboardIconColor};
font-size:22px;
margin:0
`
export const CompleteTaskIcon = styled(MdDoneAll)`
color: ${dashboardIconColor};
font-size:22px;
margin:0
`
export const Background = styled.div`
  background-color: ${backgroundBackgroundColor};
  height: ${backgroundHeight};
  width: ${backgroundWidth}
`;
export const LandingBackground = styled.div`
  background-color: ${backgroundBackgroundColor};
  height: ${backgroundHeight};
  width: ${backgroundWidth};
  display: flex;
  justify-content: center;
  align-items:center
`;
export const Text = styled.p`
  font-size: ${fontSize};
  padding: ${fontPadding};
  margin: ${fontMargin};
  color: ${fontColor}
`;
export const NavbarText = styled.div`
  font-size: 17px;
  padding: ${fontPadding};
  margin: ${fontMargin};
  color: ${textColor};
  font-family: 'Varela Round', sans-serif;
`;
export const Card = styled.div`
  background-color: ${cardBackground};
  height: ${cardHeight};
  width: ${cardWidth};
  border-radius: 30px;
  box-shadow: 2px 3px 5px -1px #000;
  overflow:hidden;
  z-index:3
`;
export const Triangle = styled.div`
 height:50vh;
width:51vw;
background-color: ${triangleBigColor};
transform: rotate(30deg);
position: relative;
left:58%;
top:-20%;
z-index:3
`
export const TriangleSmall = styled.div`
 height:30vh;
width:40vw;
background-color:${triangleSmallColor};
transform: rotate(20deg);
position: relative;
left:65%;
top:-75%;
z-index:3
`
export const WelcomeText = styled.p`
font-size:35px;
color:${fontColor};
z-index:40;
position:absolute;
top:10%
`
export const SmallCard1 = styled.div`
background-color:${card1Color};
height:30vh;
width:14vw;
// opacity:60%
`
export const SmallCard2 = styled.div`
background-color:${card2Color};
height:30vh;
width:14vw;
// opacity:80%
`
export const SmallCard3 = styled.div`
background-color:${card3Color};
height:30vh;
width:14vw;
// opacity:60%
`
export const SmallCard = styled.div`
background-color:${cardColor};
height:30vh;
width:14vw;
// opacity:60%
`
export const CardRectangle = styled.div`
background-color:${rectangleColor};
height:0.5vh;
width:14vw;
z-index:1000;
position:relative;
top:18%;
// border-bottom: 2px solid  rgba(0,0,0,0.5);
`
export const Button = styled.button`
z-index:50;
position:absolute;
outline:0;
border:0;
height:8vh;
width:13vw;
top:83%;
border-radius:20px;
background-color:${buttonColor};
box-shadow: 1px 1px 5px -1px #000;
animation: ${rotate} 1s 8s ;
&:hover{
  cursor:pointer
}
`
export const ButtonText = styled.div`
color: #fff;
font-size:19px
`
export const CardText = styled.div`
color: #fff;
font-size:23px;
font-weight:600;
opacity:0;
animation: ${tBottom} 5s 5s forwards
`
export const WelcomeCover = styled.div`
background-color:${cardBackground};
width: 36vw;
z-index:41;
position:absolute;
height:10vh;
top:14%;
right:33.7%;
animation: ${circle} 5s forwards
`
export const ModeButton = styled.button`
z-index:50;
position:absolute;
outline:0;
border:0;
height:8vh;
width:4vw;
top:13%;
left:5%;
border-radius:50%;
background-color:transparent;
&:hover{
  cursor:pointer
}
 `
 export const Popup = styled.div`
 background-color: ${cardBackground};
 height: 70vh;
 width: 30vw;
 position:absolute;
 left:35%;
 z-index:43;
 top:10%;
 border-radius:30px;
 box-shadow: 1px 1px 5px -1px #000;
`;
export const Input = styled.input`
   height: 6vh;
   width:25vw;
   border-radius:30px;
   border:1px solid ${borderColor};
   background-color: ${cardBackground};
   outline:none;
   padding-left:20px;
   font-size:17px;
   color: ${fontColor};
   &::-webkit-input-placeholder{
    font-size:17px;
  }

`
export const LoginText = styled.p`
font-size:30px;
color:${fontColor};
z-index:40;
position:absolute;
top:-1%;
left:35%
`
export const LoginButton = styled.button`
z-index:50;
position:absolute;
outline:0;
border:0;
height: 7vh;
 width:25vw;
top:70%;
left:5%;
border-radius:20px;
background-color:${buttonColor};
box-shadow: 1px 1px 5px -1px #000;
&:hover{
  cursor:pointer
}
`
export const LinkButton = styled.p`
color: ${LoginBackgroundColor};
font-size: ${fontSize};
padding: ${fontPadding};
margin: ${fontMargin};
margin-top:10px;
&:hover{
  cursor:pointer
}
`
export const NavContainer = styled.div`
width:100%;
height:auto;
background-color:${navbarColor};
display:flex;
flex-direction:column
`
export const Logodiv = styled.div`
display:flex;
flex:1;
justify-content: center
`
export const Iconsdiv = styled.div`
display:flex;
flex:2;
flex-direction:column
`
export const Spacediv = styled.div`
display:flex;
flex:3
`
export const TaskmanagerLogo = styled.p`
font-size:26px;
color:${logoColor};
`
export const DivFlex1 = styled.div`
 display: flex;
 flex:1;
 align-items:center;
 padding-left:22px;
 padding-right:20px;
`
export const DashboardBackground = styled.div`
background-color:${navbarColor};
`
export const ComponentBackground = styled.div`
background-color: ${componentBackgroundColor};
height: 100%;
border-radius: 30px 0 0 30px;
`
export const WidgetContainer = styled.div`
background-color: ${widgetColor};
border-radius:20px
`
export const HomeWelcome = styled.p`
font-size:26px;
color: ${textColor};
margin:0
`
export const TaskTitle = styled.p`
font-size:25px;
color: ${textColor};
margin:0;
margin-top:2%;
margin-left:5%;
font-family: 'Varela Round', sans-serif;
`
export const Tasktext = styled.div`
  font-size: ${fontSize};
  padding: ${fontPadding};
  margin: ${fontMargin};
  color: ${textColor};
  font-family: 'Varela Round', sans-serif;
`;
export const ButtonGeneral = styled.button`
outline:0;
border:0;
background-color:${buttonColor};
box-shadow: 1px 1px 5px -1px #000;
&:hover{
  cursor:pointer
}
`
export const Tasktitle = styled.div`
  font-size: 28px;
  padding: ${fontPadding};
  margin: ${fontMargin};
  color: ${tasktitleColor};
`;
export const FormContainer = styled.div`
 width: 25vw;
 height:65vh;
 background-color: ${modalColor};
 border:1px solid grey;
 position: absolute;
 top:15%;
 border-radius:30px
`
export const DescriptionBox = styled.div`
 width: 20vw;
 height:25vh;
 background-color: ${modalColor};
 border:1px solid grey;
 border-radius:10px
`
export const Charttext = styled.div`
  font-size: ${fontSize};
  padding: ${fontPadding};
  margin: ${fontMargin};
  color: ${chartColor};
  font-family: 'Varela Round', sans-serif;
`;
export const MobileTop = styled.div`
background-color:${widgetColor};
`
export const MobileMiddle = styled.div`
background-color:${componentBackgroundColor};
border-radius: 20px 20px 0 0;
margin-top:-3%;
`
export const ChartContainer = styled.div`{
  background-color: ${navbarColor};
  border-radius:20px;
  width:65vw;
  margin-left:15%
  }`
  export const MobileTasks = styled.div`
  background-color:${componentBackgroundColor};
  `
  export const MobileTopTasks = styled.div`
background-color:${taskWidgetColor};
`
export const BackgroundMobile = styled.div`
  background-color: ${backgroundBackgroundColor};
`;