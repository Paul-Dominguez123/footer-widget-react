import React from 'react'
import styled from 'styled-components'

export const Heder = (props) => {
  return (
    <Cabeza colores={props.color}>

        <div className='titulo'>
            <Titulo>{props.titulo}</Titulo>
        </div>
        <div className='navar'>
            <nav className='contenedor'>
                <ul className='listas'>
                    <li><a href="#" className="links__items">Inicio</a></li>
                    <li><a href="#" className="links__items">Sobre Nosotros</a></li>
                    <li><a href="#" className="links__items">Productos</a></li>
                    <li><a href="#" className="links__items">Carro</a></li>
                </ul>
            </nav>
        </div>
    </Cabeza>
  )
}
const Titulo=styled.h1`
    color: white;
    margin-left:15px;
`;
const Cabeza=styled.header`
    display: flex;
    background-color: ${({colores})=>colores};
    justify-content: space-between;
    
    width:100%;
    

    .contenedor{
        flex-direction:row;
        margin-right:15px;
        
        
        .listas{
            display: flex;
            list-style:none;
            width:100%;
            padding: 0;
            
            li{
                margin:10px;
                color: white;
                .links__items {
                    color: white;
                    margin: 10px;
                    text-decoration: underline;
    }
            }
        }


    }
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        .contenedor {
            .listas {
                flex-direction: column;

                li {
                    margin: 10px 0;
                }
            }
        }
    }
    
`;