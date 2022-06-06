import React, { Fragment } from "react";
import {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';


function App() {
  //Funciónes para el dropdown del container calendario
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }

  return (
    <Fragment>

        <div id = "boxes">
              
            <div class = "leftbox">
            <h2>Horario de deportes:</h2>
            <div class = "buttons">
            <a href="https://alumno.uai.cl/santiago/deportes/" class="apat">Santiago</a>
            <a href="https://alumno.uai.cl/vina-del-mar/deportes/" class="apa">Viña del mar</a>
            </div>
            </div> 

              
            <div class = "rightbox">
                <h2>Horario de buses:</h2>
                <div class = "buttons">
                <a href="https://www.uai.cl/campus-uai/campus-penalolen/buses-de-acercamiento-penalolen/" class="simpt">Santiago</a>
          <a href="https://www.uai.cl/campus-uai/campus-vina-del-mar/buses-de-acercamiento-vina-del-mar/" class="simp">Viña del mar</a>
                </div>

            </div>
        </div>

        <div class = "container-calendario">
          <div class = "text-container">  
            <h3>
                Calendario
            </h3>
            <hr></hr>
              <div class = "group-buttons"> 
                <div class="contenido-botones">
                  <div className="App">
                  <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction="down">
                    <DropdownToggle caret className="botonDropdown">
                      Ver más
                    </DropdownToggle>
                    <DropdownMenu className="opciones">
                      <DropdownItem id="item-1" href="https://alumnosfic.uai.cl/pregrado/calendario-academico/">Calendario Académico Pregado</DropdownItem> 
                      <DropdownItem id="item-2" href="https://alumnosfic.uai.cl/pregrado/calendario-de-pruebas-y-examenes/">Calendario de Exámenes y Pruebas Pregrado</DropdownItem>
                      <DropdownItem id="item-3" href="https://alumnosfic.uai.cl/quinto-ano/calendario-academico/">Calendario Académico Quinto Año</DropdownItem>
                      <DropdownItem id="item-4" href="https://alumnosfic.uai.cl/quinto-ano/calendario-academico/">Calendario de Exámenes y Pruebas Quinto Año</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>   
                  <a class="actividades-fic" href="https://ingenieria.uai.cl/">Actividades FIC</a>
                  </div>
                </div>
            </div>	
            </div>
        </div>
    </Fragment>
  );
}

export default App;
