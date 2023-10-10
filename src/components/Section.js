import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Section({title,description,backgroundImg,leftButtontext,rightButtontext}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Slide left>
        <Itemtext>
            <h1>{title}</h1>
            <p>{description}</p>

        </Itemtext>
        </Slide>
        <FooterGroup>
        <Fade bottom>
        <ButtonGroup>
            <Leftbutton>
                {leftButtontext}
            </Leftbutton>
            {rightButtontext && 
              <Rightbutton>
              {rightButtontext}
               </Rightbutton>
             }
            
            
        </ButtonGroup>
        </Fade>
        <Downarrow src="/images/down-arrow.svg" />
        </FooterGroup>
       

    </Wrap>
  )
}



export default Section
const Wrap = styled.div`
  height:100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image : url('/images/model-s.jpg');
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  background-image : ${props => `url("/images/${props.bgImage}")`}
 
 

`;
const Itemtext = styled.div`
padding-top : 14vh;
text-align : center;
    

`;
const FooterGroup = styled.div`

`;

const ButtonGroup = styled.div`
display:flex;


@media (max-width: 786px){
    flex-direction:column;
}

   
`
const Leftbutton = styled.div`
  background-color : rgba(23,32,36,0.8);
  width :  256px;
  height : 40px;
  text-transform : UpperCase;
  color :   white;
  opacity:  0.85;
  border-radius: 100px;
  font-size:12px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  margin:8px;


  

`;
const Rightbutton = styled(Leftbutton)`
    background-color: white;
    color: black;
    opacity:0.65;

`;

const Downarrow = styled.img`
   margin-top: 20px;
   height: 40px;
   animation: animateDown infinite 1.5s;
`;