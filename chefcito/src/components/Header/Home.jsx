import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>      
      <section className="hero">
        <div className="navegacion">
          <nav>
            <ul className={`menu ${isOpen ? "menu-hamburguesa" : ""}`}>
              <li><a href="#recetas">Recetas</a></li>
              <li><a href="#idear">Idear</a></li>
              <li><a href="#historial">Historial</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
            <div
              className={`hamburguesa ${isOpen ? "hamburguesa-active" : ""}`}
              onClick={toggleMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </nav>
        </div>

        <div className="principal">
          <div className="titulo">
            <h1>Bienvenido a Chefcito Online</h1>
          </div>
          <div className="subtitulohome">
            <h2>
              donde cada receta se convierte en una experiencia única. <br />
              ¡Explora, aprende y cocina con pasión!
            </h2>
          </div>
        </div>
      </section>      
    </>
  );
};

export default Home;
