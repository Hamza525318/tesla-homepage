import React from 'react'
import { auth } from '../firebase';
import {  signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {selectCars} from "../features/car/carSlice";
import {useSelector} from "react-redux"
import ModelS from './ModelS';

function Header() {
  const[burgerStatus,setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  const signInwithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result)=>{
      console.log(result);
    })
    .catch((err)=>{
      alert(err.message)
    })
  }
  const signOutwithGoogle = ()=>{
    signOut(auth).then(() => {
        alert('sign-out successfull')
    }).catch((error) => {
       alert('sign-out unsuccessfull')
    });
  }
 
   
  return (
    <Container>
      <a href='#logo'><img src="/images/logo.svg" alt='TESLA' /></a>

      <Menu>
       <Link to='/ModelS'>MODEL S</Link>
       <a href='#c'>MODEL Y</a>
       <a href='#c'>MODEL 3</a>
       <a href='#c'>MODEL X</a>
        
      </Menu>

      <Shop>
         <a href='#s' onClick={signInwithGoogle}>SIGN IN</a>
         <a href='#y' onClick={signOutwithGoogle}>SIGN OUT</a>
         <CustomMenu onClick={()=>setBurgerStatus(true)} />
         
      </Shop>
      
      
      <BurgerNav show={burgerStatus}>
        <CloseWrapper >
          <ImCross onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
       
        <li><Link to='/ModelS'>ModelS</Link></li>
        <li><a href='#c'>ModelY</a></li>
        <li><a href='#c'>Model3</a></li>
        <li><a href='#c'>ModelX</a></li>
        <li><a href='#v'>Existing Inventory</a></li>
        <li><a href='#v'>Used Inventory</a></li>
        <li><a href='#v'>Trade-In</a></li>
        <li><a href='#v'>CyberTruck</a></li>
        <li><a href='#v'>Roadster</a></li>
        
      </BurgerNav>
           
      

    </Container>
  

    
  );
}

export default Header;

const Container = styled.div`
    display:flex;
   min-height:60px;
   position: relative;
   justify-content:space-between;
   align-items:center;
   padding: 0px 20px;
   top:0;
   left:0;
   right:0;
   z-index:1;
`;

const Menu = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  
  
  a{
    font-weight:600;
    padding: 0px 14px;
  }
  a:hover{
     border: 1px solid rgb(83, 82, 82);;
     padding: 4px 10px;
  }
  @media (max-width:786px){
    display:none;
    
  }
  
`;

const Shop = styled.div`
  display:flex;
  align-items:center;
  

  a{
    font-weight:600;
    padding: 0px 10px;
    
  }
  @media (max-width:786px){
    a{
      font-size:14px;
    }
  }
  
`;

const CustomMenu = styled(GiHamburgerMenu)`

   cursor:pointer;
`;

const BurgerNav = styled.div`

     background-color: white;
     color:black;
     min-height:100vh;
     width:250px;
     position:fixed;
     top:0;
     right:0;
     z-index:16;
     padding:20px;
     display:flex;
     flex-direction:column;
     text-align:start;
     transform: ${props => props.show?'translateX(0%)':'translateX(100%)'};
     transition: transform 0.5s;
  
     
     
     border-bottom: 1px solid black;
     li{
      list-style-type: none;
      padding: 16px 0px;
      width:100%;
      border-bottom: 1px solid rgba(0,0,0,0.65);
     

      }

      a{
        font-weight:600;
      }

     
     
     
`;
const CloseWrapper = styled.div`
     width:100%;
     display:flex;
     justify-content:flex-end;

     .icon{
      cursor:pointer;
     }
`;











