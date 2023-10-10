import React from 'react'
import styled from 'styled-components';
import Model3Section from './Model3Section';
import Video from './video';


function ModelsSection2() {
  return (
     <Container>
        <h1>Interior of Future</h1>
        <FutureBox>
           <img src='/images/new-interior.jpg' alt='connected'/>
        </FutureBox>

      <Model3Section/>
      <Video />
      
     
     </Container>
  )
}


export default ModelsSection2;

const Container = styled.div`
  
   background-color: black;
   opacity: 0.95;
   padding: 80px 0px;
   border: 1px solid rgba(0,0,0,0.85);
   
   h1{
    text-align: center;
    color: white;
    padding: 40px 0px;

   }
   @media(max-width:786px){
      padding: 0px ;
      
   }

`;
const FutureBox = styled.div`
  img{
   width:100%;
   

  
  }
  
  
`