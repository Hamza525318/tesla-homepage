import React, { useState } from 'react';
import styled from 'styled-components';

import { specs } from './specs';

function ModelsFinal() {
     const[data,setData] = useState(0);
     const[isActive,setActive] = useState(false);

     const handleClick = e=>{
        setActive(isActive => !isActive)
     }

     const{title,range,mile,peak,wheels,weight,acc,topSpeed,Drag,powertrain,charging} = specs[data];


  return (
     <Container>
        <img src='/images/modelSspecs.jpeg' alt="MODELS"/>
        <Boxdiv>
            <h2>{title}</h2>
            
                <button onClick={()=>setData(0)} className='first '>Model S</button>
                <button  onClick={()=>setData(1)} className='second'>Model S plaid</button>
             
             <TextDiv>
                <First>
                  <Small>
                    <p>Range(epa estd.)</p>
                    <p>{range}</p>
                   </Small>
                   
                   <Small>
                    <p>1/4Mile</p>
                    <p>{mile}</p>
                   </Small>

                   <Small>
                    <p>Peak power</p>
                    <p>{peak}</p>
                   </Small>

                   <Small>
                    <p>Wheels</p>
                    <p>{wheels}</p>
                   </Small>

                   <Small>
                    <p>Weight</p>
                    <p>{weight}</p>
                   </Small>
                 
                </First>
                <Second>
                <Small>
                    <p>Acceleration</p>
                    <p>{acc}</p>
                   </Small>

                   <Small>
                    <p>Top Speed</p>
                    <p>{topSpeed}</p>
                   </Small>

                   <Small>
                    <p>Drag Coefficient</p>
                    <p>{Drag}</p>
                   </Small>

                   <Small>
                    <p>SuperCharging Max </p>
                    <p>{charging}</p>
                   </Small>

                   <Small>
                    <p>Power Train</p>
                    <p>{powertrain}</p>
                   </Small>
                </Second>
             </TextDiv>
        </Boxdiv>

     </Container>
  )
}

export default ModelsFinal;

const Container = styled.div`
     height:100vh;
    padding-top: 30px ;
    margin: 0 auto;
    background-color: black;
    opacity:0.95;

    display:flex;
    justify-content: space-around;
    
    h2{
        color:white;
    }

    img{
        width:45%;
    }
    @media (max-width:786px){
    flex-direction:column;
    padding-top:0px;
         img{
            width:100%;
         }
    }
`;
const Boxdiv = styled.div`
    width:45%;
    text-align:center;
    align-items:center;
    button{
        height:30px;
        width:200px;
        border-radius:20px;
        border:1px solid white;
        margin: 20px 10px;
       
        background-color:transparent;
        color:white;
        cursor:pointer;

    }
    @media (max-width:786px){
        width:100%;
    }
`;


const TextDiv = styled.div`
   display:flex;
   justify-content:space-around;
   padding:25px 0px;
`;
const First = styled.div`

`;
const Second = styled(First)`

`;
const Small = styled.div`
 
    margin: 30px 0px;
   p{
       padding:5px 0px;
       color:white;
   }
`;