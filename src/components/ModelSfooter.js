import React from 'react';
import styled from 'styled-components';

function ModelSfooter() {
  return (
    <Container>
       <Wrap>
         <Text>
            <h1>Model S</h1>
            <button>ORDER NOW</button>
            <button>COMPARE</button>
         </Text>
         <img src='/images/whiteModels.jpeg' alt='LOVE'/>
       </Wrap>

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
  )
}

export default ModelSfooter;

const Container = styled.div`
   height: 60vh;
   padding: 30px 0px;
   margin: 0 auto;
`;
const Wrap = styled.div`
   display:flex;
   justify-content:space-between;
   align-items: center;
   img{
      width:40%;
   }
   @media (max-width:786px){
      flex-direction:column;
      
      img{
         width:100%;
      }
   }
`;

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

const Text = styled.div`
    button{
      height: 40px;
      width: 220px;
      background-color: transparent;
      border: 1px solid black;
      margin: 10px 20px;
      border-radius: 20px;
    }
    h1{
      margin: 10px 23px;
    }
    button:hover{
      background-color:black;
      color:white;
    }
    @media (max-width:786px){
       text-align:center;
    }
`;