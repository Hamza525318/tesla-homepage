import React from 'react';
import styled from 'styled-components';
import Roll from 'react-reveal/Roll';

function Model3Section() {
  return (
    <Container>
      <Roll left>
      <Box>
         <img src='/images/connected.jpg' alt='Always Connected'/>
         <Text>
            <h5>Stay Connected</h5>
            <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
         </Text>
      </Box>
      </Roll>

    <Roll right>
    <Box>
      
        <video src='https://tesla-cdn.thron.com/delivery/public/video/tesla/7aa04cc1-863e-4ac6-952e-4ea01457bf47/bvlatuR/WEBHD/MS-Interior-Grid-2-Audio-Desktop' autoPlay muted loop ></video>
          <Text>
            <h5>Immersive Sound</h5>
            
            <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
        </Text>
        
        
      </Box>
      </Roll>

      <Roll left>
      <Box>
            <img src='/images/cycle.jpeg' alt='Fully Spaced'/>
      <Text>
            <h5>Room for Everything</h5>
            <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
        </Text>
           
        
      </Box>
      </Roll>

    </Container>
  )
}

export default Model3Section;

const Container = styled.div`
    width: 100%;
    margin: 6% 0px;
    padding: 0 10%;
`
const Box = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-around;
    img{
        width:45%;
        margin:20px 15px;
    }
    video{
        width:45%;
        margin:20px 15px;
    }
    @media (max-width:786px){
      flex-direction: column;
      img{
        width:100%;
      }
      video{
        width:100%;
      }
    }
`;
const Text = styled.div `

 width: 35%;
 p{
    color:white;
    font-size:16px;
    margin: 15px 0px ;
 }
 h5{
    color:white;
 }
 @media (max-width:786px){
  width:100%;
 }
`