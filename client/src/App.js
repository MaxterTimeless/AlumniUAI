import React, { Fragment } from "react"
import './App.css';


function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
