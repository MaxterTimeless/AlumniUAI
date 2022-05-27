import React, { Fragment } from "react"
import './App.css';

function App() {
  const Menu = (dis) => {
    if(document.getElementById(dis).style.display == "block"){
      document.getElementById(dis).style.display = "none";
    } else {
      document.getElementById(dis).style.display = "block";
    }
  };
  return (
    <Fragment>
        <div class="top-bar">
          <div class="wrap">
            <div class="menu-bar">
              <div class="nav-top">
                
                <a href="https://alumnosfic.uai.cl/" class="Titulo">AlumnosFIC</a>
                
                <button onClick={()=>Menu("Dropdown-menu")} class="navicon_js-navicon">
                  <svg height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" class="three_lines"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
                </button>
              </div>
            </div>
            <div id="Dropdown-menu" class="dropdown-content">
              <div class="dropdown-content-1">
                <a href="#">Información Académica</a>
                <a href="#">Mallas Curriculares</a>
                <a href="#">Pregrado</a>
                <a href="#">Quinto Año</a>
                <a href="#">Prácticas</a>
                <a href="#">Mecanismos de Titulación</a>
                <a href="#">Doble Titulación</a>
                <a href="#">Internacionalzación</a>
                <a href="#">Acreditaciones</a>
                <a href="#">Asuntos Estudiantiles</a>
              </div> 
              <div class="dropdown-content-2">
                <a href="https://ingenieria.uai.cl/">Facultad de Ingeniería y Ciencias</a>
                <a href="https://bibliotecas.uai.cl/">Biblioteca</a>
                <p class="Centros">
                  Centros
                  <button onClick={()=>Menu("Dropdown-centros")} class="downArrow">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" transform="rotate(90)">
                      <path fill="#dcdcdc" d="M6.4,19.3l7.3-7.3L6.4,4.7l2.3-2.3l9.6,9.6l-9.6,9.6L6.4,19.3z"></path>
                    </svg>
                  </button>
                </p>
                
              </div>
              <div id="Dropdown-centros" class="dropdown-content-centros">
                <a href="https://ingenieria.uai.cl/centros/bio/">iUAI Bio Center</a>
                <a href="https://ingenieria.uai.cl/centros/built/">iUAI Built Center</a>
                <a href="https://ingenieria.uai.cl/centros/complexity/">iUAI Complexity Center</a>
                <a href="https://ingenieria.uai.cl/centros/dec/">iUAI Design Engineering Center</a>
                <a href="https://ingenieria.uai.cl/centros/earth/">iUAI Earth Center</a>
                <a href="https://ingenieria.uai.cl/centros/mining/">iUAI Mining Center</a>
                <a href="https://ingenieria.uai.cl/centros/systems/">iUAI Systems Center</a>
                {/* Nota: No se ha encontrado el link para Tech Center | <a href="#">iUAI Tech Center</a> */}
              </div> 
              <div class="top-search">
                <form action="https://ingenieria.uai.cl" method="GET" class="search-form">
                  <input type="search" name="s" class="search-form__field" placeholder="Ingresa tu búsqueda" />
                  <button type="submit" class="search-form-s"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
                </form>                        
              </div>
            </div>
            
          </div>
        </div>
        

        <div>
          <div class="container">
          <img src='https://i.imgur.com/fjFJ6IH.png'></img>
          <span> Horario de buses</span>
          <a href="https://www.uai.cl/campus-uai/campus-penalolen/buses-de-acercamiento-penalolen/" class="btn">Santiago</a>
          <a href="https://www.uai.cl/campus-uai/campus-vina-del-mar/buses-de-acercamiento-vina-del-mar/" class="bn">Viña del mar</a>
          </div>

          <div class="contenedor">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DnJWmBeb0MyDg4gS7Fo2V7hNShYAZcZskg&usqp=CAU'></img>
            <span> Horario de deportes</span>
            <a href="https://alumno.uai.cl/santiago/deportes/" class="dnt">Santiago</a>
            <a href="https://alumno.uai.cl/vina-del-mar/deportes/" class="dn">Viña del mar</a>
          </div>
        </div>

        <footer class="footer">            
          <div class="third box">
              <p><strong>SANTIAGO: <a href="tel:+56223311000">– (56 2) 2331 1000</a></strong><br />
              Diagonal las Torres 2640, Peñalolén. Edificios C, D y E.<br />
              Av. Presidente Errázuriz 3485, Las Condes.<br />
              Av. Santa María 5870, Vitacura.<br />
              <strong>VIÑA DEL MAR:</strong>  <strong>– <a href="tel:+56322503500">(56 32) 250 3500</a></strong><br />
              Padre Hurtado 750, Viña del Mar.<br />
              <a href="https://www.uai.cl/certificados-academicos/">Certificados académicos </a></p>
          </div>
          <div class="two-third box">
              <div class="footer__item">
                 <img src="https://ingenieria.uai.cl/assets/uploads/2022/03/acreditacion_2022_6_anos.png"/>
              </div>
          </div>
        </footer>  


    </Fragment>
  );
}

function ActionLink() {
  function handleClick(e) {    e.preventDefault();    console.log('The link was clicked.');  }
    return (
    <a href="#" onClick={handleClick}>      Click me
    </a>
  );
}

export default App;
