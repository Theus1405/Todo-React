 import styled from "styled-components";

 export const StyleForm = styled.div `


 position: relative;
 margin: 0 auto;
 max-width: 540px;
 top: -140px;
 display: flex;
 padding: 10px;

 input{
   width: 425px;
   height: 54px;
   border: none;
   padding-left: 10px;
 }

 button{
   height: 54px;
   width: 105px;
   background-color: #005275;
   border: 1px solid white;
   color: white;
   margin-left: 10px;
   
   &:hover{
      background-color: blueviolet;
   }
 }

 `


 export const StyleList = styled.div `
    
    max-width: 540px;
    background-color: white;
    margin: 0 auto;
    position: relative;
    top: -80px;
    padding-top: 20px;
    box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.10);    

   h2{
      text-align: center;     
      padding-bottom : 20px;
   }
 `