import React, { Fragment } from "react"
import './App.css';

function App() {
  return (
    <Fragment>
        <div class="top-bar">
          <div class="wrap">
            <div class="menu-bar">
              <div class="nav-top">
                
                <a href="https://alumnosfic.uai.cl/" class="Titulo">AlumnosFIC</a>
                
              
                <button class="navicon_js-navicon">
                  <svg height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" class="three_lines"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
                </button>
              </div>
              
            </div>
            <div class="top-search">
              <form action="https://ingenieria.uai.cl" method="GET" class="search-form">
                <input type="search" name="s" class="search-form__field" placeholder="Ingresa tu búsqueda" />
                <button type="submit" class="search-form__submit"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
              </form>                        
            </div>
          </div>
        </div>
        <div class="header__wrap" >
          <div class="site-name">
            <a href="https://ingenieria.uai.cl">Facultad de Ingeniería y Ciencias</a>
          </div>
          <div class="logo">
            <a href="https://www.uai.cl" title="Universidad Adolfo Ibáñez" rel="home-uai"></a>
            
          </div>
        </div>
        <footer class="footer">            <div class="third box">
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

export default App;
