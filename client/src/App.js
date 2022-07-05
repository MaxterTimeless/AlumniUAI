import React, { Fragment } from "react";
import {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';


function App() {
  //Funciónes para el dropdown del container calendario
  //Simplemente abre y cierra el dropdown al momento de hacer click en el
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }

  return (
    <Fragment>

        <div class= "theme_boxes" id = "boxes">
          <div class="top-row">
            <div class = "pregrado">
              <h2>Pregrado</h2>
              <hr></hr>
              <div class="menu-pregrado">
                <ul class="menu">
                  <li ><a href="https://alumnosfic.uai.cl/pregrado/reglamentos/">Reglamentos</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/pregrado/normativa-interna-uai/">Normativa Interna UAI</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/pregrado/calendario-academico/">Calendario Académico</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/pregrado/calendario-de-pruebas-y-examenes/">Calendario de Pruebas y Exámenes</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/pregrado/minor/">Minor</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/pregrado/coordinacion/">Coordinación Pregrado</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/pregrado/preguntas-frecuentes/">Preguntas Frecuentes</a></li>
                </ul>
              </div>
            </div>   
              
            <div class = "quinto-año">
              <h2>Quinto año</h2>
              <hr></hr>
              <div class="menu-quinto">
                <ul class="menu">
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/reglamentos/">Reglamentos</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/normativa-interna-uai/">Normativa Interna UAI</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/calendario-academico/">Calendario Académico</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/calendario-de-pruebas-y-examenes/">Calendario de Pruebas y Exámenes</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/ingreso/">Ingreso a Quinto Año</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/optativos-profesionales/">Optativos Profesionales</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/menciones/">Menciones</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/titulacion/">Condiciones Egreso / Titulación</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/coordinacion/">Coordinación Quinto Año</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/quinto-ano/preguntas-frecuentes/">Preguntas Frecuentes</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bottom-row">
            <div class = "practica">
              <h2>Prácticas</h2>
              <hr></hr>
              <div class="menu-practica">
                <ul class="menu">
                  <li ><a href="https://alumnosfic.uai.cl/practicas/procedimientos-practica/">Procedimientos</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/practicas/reglamentos-practica/">Reglamentos</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/practicas/preguntas-frecuentes-practica/">Preguntas Frecuentes</a></li>
                </ul>
              </div>
            </div> 
            
            <div class = "titulacion">
            <h2>Mecanismos de Titulación</h2>
            <hr></hr>
              <div class="menu-tit ">
                <ul class="menu">
                  <li ><a href="https://alumnosfic.uai.cl/mecanismos-de-titulacion/procedimientos-capstone-project/">Procedimiento Startup-School</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/mecanismos-de-titulacion/procedimientos-pasantias/">Pasantías</a></li>
                  <li ><a href="https://alumnosfic.uai.cl/mecanismos-de-titulacion/articulacion-con-magister/">Magíster</a></li>
                </ul>
              </div>
            </div> 
          </div>
        </div>
        <div id = "boxes">
             {/*botones de horario de deportes santiago y viña*/}  
            <div class = "leftbox">
            <h2>Horario de deportes:</h2>
            <div class = "buttons">
            <a href="https://alumno.uai.cl/santiago/deportes/" class="apat">Santiago</a>
            <a href="https://alumno.uai.cl/vina-del-mar/deportes/" class="apa">Viña del mar</a>
            </div>
            </div> 

              
            <div class = "rightbox">
              {/*botones de horario de buses santiago y viña*/}
                <h2>Horario de buses:</h2>
                <div class = "buttons">
                <a href="https://www.uai.cl/campus-uai/campus-penalolen/buses-de-acercamiento-penalolen/" class="simpt">Santiago</a>
          <a href="https://www.uai.cl/campus-uai/campus-vina-del-mar/buses-de-acercamiento-vina-del-mar/" class="simp">Viña del mar</a>
                </div>

            </div>
        </div>

    {/*Botón Dropdown realizado con bootstrap*/}
    <div class = "container-calendario">
      <div class = "text-container">  
        <h3>
            Calendario
        </h3>
        <hr></hr>
          <div class = "group-buttons"> 
            <div class="contenido-botones">
              <div className="App">
              {/*Uso de las funciones para el funcionamiento del Dropdown */}
              <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction="down">
                <DropdownToggle caret className="botonDropdown">
                  Ver más
                </DropdownToggle>
                {/*Se declaran los items del Dropdown, las cuales deben linkear a distintas páginas de AlumnosFIC */}
                <DropdownMenu className="opciones">
                  <DropdownItem id="item-1" href="https://alumnosfic.uai.cl/pregrado/calendario-academico/">Calendario Académico Pregado</DropdownItem> 
                  <DropdownItem id="item-2" href="https://alumnosfic.uai.cl/pregrado/calendario-de-pruebas-y-examenes/">Calendario de Exámenes y Pruebas Pregrado</DropdownItem>
                  <DropdownItem id="item-3" href="https://alumnosfic.uai.cl/quinto-ano/calendario-academico/">Calendario Académico Quinto Año</DropdownItem>
                  <DropdownItem id="item-4" href="https://alumnosfic.uai.cl/quinto-ano/calendario-academico/">Calendario de Exámenes y Pruebas Quinto Año</DropdownItem>
                </DropdownMenu>
              </Dropdown>   
              {/*El anchor debe redireccionar a la página oficial de ingeniera de la universidad */}
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
