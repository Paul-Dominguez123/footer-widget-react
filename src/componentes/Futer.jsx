import React from "react";
import styled from "styled-components";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const ContainerSecon = styled.div`
  background-color: #646161;
  width:100px;
  height:auto;
  margin:10px;
  &:HOVER{
    background-color:white;
    color:black;
    transition:0.5s all ease;
    content:"uwuwu"
  }
  
  
`;

export const Futer = (props) => {

  let ContainerDivs = [];
  if(props.cajas){
    for(let i=0; i < parseInt(props.cajas) ;i++){
      ContainerDivs.push(<ContainerSecon key={i}>
          <h4>sajfsajkjd</h4>
         </ContainerSecon>)
    } 
  }
  
  console.log(ContainerDivs)
  return (
    <PiePagina colores={props.color}>
      <Contenedores className="logo" >
        <i className="logo__redes">
          <BiLogoFacebookCircle />
        </i>
        <i className="logo__redes">
          <FaWhatsapp />
        </i>
        <i className="logo__redes">
          <BsInstagram />
        </i>
        <i className="logo__redes">
          <BsTwitter />
        </i>
        <i className="logo__redes">
          <AiFillYoutube />
        </i>
        <i className="logo__redes">
          <FaTiktok />
        </i>
      </Contenedores>
      <Contenedores className="marcas">
        <h4>{props.marca}</h4>
        <p>{props.derechos}</p>
      </Contenedores>
      <Contenedores className="links">
        <a className="links__items">Políticas</a>
        <a className="links__items">Información</a>
      </Contenedores>
      <Uwu>{ContainerDivs}</Uwu>
      
    </PiePagina>
  );
};
const PiePagina = styled.footer`
  background-color: ${({colores})=>colores};
  width: 100%;
  height: auto;
  text-align-last: center;
  flex-direction: row;
  

  .logo {
    color: white;

    .logo__redes {
      margin: 10px;
     
    }
  }

  .marcas {
    color: white;
  }

  .links {
    .links__items {
      color: white;
      margin: 10px;
      text-decoration: underline;
    }
  }
`;

const Contenedores = styled.div`
  background-color: #424242;
`;

const Uwu=styled.div`
  display:flex;
 
`;
