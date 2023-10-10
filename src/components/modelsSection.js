import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Fade from 'react-reveal/Fade';
import ModelsSection2 from './ModelsSection2';
import ModelsFinal from './ModelsFinal';
import ModelSfooter from './ModelSfooter';

function ModelsSection() {
  return (
      <Wrap>
        <Header/>
        <Headers>
          <Heading>
            <h1>Model S</h1>
            <p>Plaid</p>
          </Heading>
          <Info>
            <Fade top>
            <Smalldiv>

                <h3>396 mi</h3>
                <p>Range(epa est).</p>
            </Smalldiv>
            <Smalldiv>
                <h3>1.99s</h3>
                <p>0-60kmph</p>
            </Smalldiv>
            <Smalldiv>
                <h3>Top Speed</h3>
                <p>200mph</p>
            </Smalldiv>
            <Smalldiv>
                <h3>1020hp</h3>
                <p>Peak Power</p>
            </Smalldiv>
            </Fade>
            

          </Info>
        </Headers>
        <ModelsSection2 />
        <ModelsFinal />
        <ModelSfooter/>
    
      </Wrap>
  )
}


export default ModelsSection;

const Wrap = styled.div`
   height:100vh;
`
const Headers = styled.div`
      height:100vh;
     background-position: center;
   background-size: cover;
  background-repeat: no-repeat;
   background-image : url('/images/model-s.jpg');
   text-align:center;
   display:flex;
    flex-direction:column;
    justify-content: space-between;
`;

const Heading = styled.div`
    padding-top:14vh;
`;
const Info = styled.div`
  height:80px;
    
   display:flex;
   justify-content:center;
 
   align:items:center;
   margin-bottom:2%;
   color:white;
   @media(max-width:550px){
      
      flex-direction: column;
      margin-bottom: 30%;
   }
`;
const Smalldiv = styled.div`
     padding: 0px  30px;
     h3{
        color:white;
        
     }
     p{
        color:white;
     }
     @media (max-width:786px){
        margin: 15px 0px;
     }
`;


