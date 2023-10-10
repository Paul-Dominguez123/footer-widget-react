import { useState } from 'react'
import styled  from 'styled-components'
import { Futer } from './componentes/Futer'
import { Heder } from './componentes/heder'





function App() {
  

  return ( 
    <div id="contenedor">
      
      <Heder color={"#9e9e9e"} titulo={"burger king"}/>
      <ExpandedDiv/>
      <Futer marca="Burger King" derechos="Todos los Derechos reservados 2023" cajas="0" color={"#424242"}/>
       
    </div>
    
    )
  
}


export default App


const ExpandedDiv = styled.div`
height: 370px;

`;