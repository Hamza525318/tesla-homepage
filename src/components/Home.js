import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import Section from './Section';
import { ImCross } from "react-icons/im";

function Home() {
   const[shouldShow,Setshouldshow] = useState(false);
  return (
    
     <Container>
       <Welcome>
        <button onClick={()=>Setshouldshow(true)}>welcome</button>
        {
          shouldShow && (
            <ModalBg>
              <Modalbody>
                 <CrossIcon onClick={()=>Setshouldshow(false)}>
                  <ImCross className='icon'/>
                 </CrossIcon>
                 <h1>Welcome to Tesla webpage</h1>
                 <p>Feel free to checkout our collection</p>
              </Modalbody>
            </ModalBg>
          )
        }
       </Welcome>

        <Section title="Model S"
                 description="Order Online for touchless Delivery" 
                 backgroundImg = "model-s.jpg"
                 leftButtontext = "custom order"
                 rightButtontext = "Existing Inventory"/>

        <Section title="Model Y"
                 description="Order Online for touchless Delivery" 
                 backgroundImg = "model-y.jpg"
                 leftButtontext = "custom order"
                 rightButtontext = "Existing Inventory"/>

        <Section title="Model 3"
                 description="Order Online for touchless Delivery" 
                 backgroundImg = "model-3.jpg"
                 leftButtontext = "custom order"
                 rightButtontext = "Existing Inventory"/>

        <Section title="Model X"
                 description="Order Online for touchless Delivery" 
                 backgroundImg = "model-x.jpg"
                 leftButtontext = "custom order"
                 rightButtontext = "Existing Inventory"/>

         <Section title="Lowest Cost Solar Panels in America"
                 description="Money-back guarantee" 
                 backgroundImg = "solar-panel.jpg"
                 leftButtontext = "Order Now"
                 rightButtontext = "Learn More"/>
                 
        <Section title="Solar Roof"
                 description="Produce clean energy from your Roof" 
                 backgroundImg = "solar-roof.jpg"
                 leftButtontext = "Order Now"
                 rightButtontext = "Learn More"/>

        <Section title="Accessories"
                 description=" "
                 backgroundImg = "accessories.jpg"
                 leftButtontext = "Shop Now"/>

       <Footer>
         <FooterItems>
             <a href="#f">Tesla2022</a>
             <a href="#f">Privacy</a>
             <a href="#f">Vehicle Recalls</a>
             <a href="#f">Contact</a>
             <a href="#f">Career</a>
             <a href="#f">News</a>
             <a href="#f">Engage</a>
             <a href="#f">Location</a>
         </FooterItems>
       </Footer>
                 

        
                 
     </Container>
  );
}

const Container = styled.div` 

height:100vh;

`
const Footer = styled.div`
     width:100%
     min-height:40px ;
     display:flex;
     justify-content:center;
     align-items:center;
    
`;
const FooterItems = styled.div`
    display:flex;
   
    a{
      font-size:14px;
      font-weight:200;
      padding: 0px 10px;
    }
    @media (max-width:786px){
       flex-direction:column;
       a{
         padding:5px 0px;
       }
    }
`;
const Welcome = styled.div`
width:100%;
 button{
    position:fixed;
    top:10%;
    right:2%;
    padding: 4px 14px;
    background-color:transparent;
    border: 1px solid black;
 }

`;
const ModalBg = styled.div`
position:fixed;
top:0;
left:0;
z-index:1;
width:100%;
height:100%;
background-color:rgba(0,0,0,0.5);
display:flex;
justify-content:center;

`;

const Modalbody = styled.div`
   background-color:white;
     width:500px;
     height:350px;
     text-align:center;
    margin: 10% auto;
    padding:30px 0;
    h1{
      margin-top: 88px;
      color:rgb(172, 12, 12);
    }
    p{
      padding:14px 0px;
    }
`;

const CrossIcon = styled.div`
   
`


export default Home;