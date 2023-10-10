import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { data } from './data';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa'

function Video() {
  
    const[index,setIndex] = useState(0);
    const{id,vid,title,text} = data[index];

    const checkNumber = (number)=>{
        if(number>data.length-1){
           return 0;
        }
        if(number < 0){
          return data.length-1;
        }
        return number
      }
   
    const increase = (e)=>{
       
        e.preventDefault();
        setIndex(previndex => checkNumber(previndex + 1));
    }
    const decrease = (e)=>{
        e.preventDefault();
        setIndex(previndex =>checkNumber(previndex - 1));
    }
    return(

  
         <Container>
              <Wrap>
                <video src={vid} autoPlay loop muted/>
                <span><FaAngleLeft onClick={decrease} className='icon'/>
                <FaAngleRight  onClick={increase} className='icon'/></span>
                <TextDiv>
                    <p>{title}</p>
                    <span>{text}</span>
                </TextDiv>
              </Wrap>
         </Container>
  );
}

export default Video;

const Container = styled.div`
    
     height:100vh;
     @media (max-width:786px){
        height:40vh;
        margin-top:60px;
     }
`;
const Wrap = styled.div`
    
    display:flex;
    flex-direction:column;
    margin: 20px auto;
 
   

   video{
   
    width:80%;
    margin: 0 auto;
    border-radius: 20px;
   }
   span{
    margin:0 auto;
    color:white;
   }
   .icon{
    background-color: white;
    margin: 5px 10px;
   }
   @media (max-width:786px){
       video{
        width:100%;
       }
   }

   
`;
const TextDiv = styled.div`
     margin: 5px auto;
    width:40%;
    p{
        margin:15px 0px;
        color:white;
        font-size:16px;
    }
    span{
        color:white;
        font-size:15px;
    }
    
    @media (max-width:786px){
    
         width:100%;
    
    }
`;