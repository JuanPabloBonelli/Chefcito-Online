import React, { useState } from "react";
import "./Inicio.css";
import Arroz from '../assets/Arroz.jpg'
import Focaccia from '../assets/Focaccia.jpg'
import Pizza from '../assets/Pizza.jpg'
import ArrozLeche from '../assets/Arroz-con-leche.jpg'
import Brownie from '../assets/Brownie.jpg'
import Cheesecake from '../assets/Cheesecake.jpg'

const cardsData = [  // Arreglo de objetos, cartas con recetas 
  {
    image: Focaccia,
    text: "Focaccia",
    ingredients: ["Para una textura y sabor perfectos, no escatimes en el aceite de oliva. Aplícalo generosamente sobre la superficie antes de hornear, ya que le dará ese toque crujiente y dorado que lo caracteriza."],
    recipeLink: "https://alicante.com.ar/receta/focaccia-para-compartir/",
  },
  {
    image: Arroz,
    text: "Arroz con pollo",
    ingredients: ["Para un toque especial, sofríe el arroz unos minutos antes de agregar el líquido. Esto intensifica su sabor y mejora la textura. Añade tus especias favoritas y no olvides un poco de perejil fresco al final."],
    recipeLink: "https://alicante.com.ar/receta/176-receta-arroz-con-pollo/",
  },
  {
    image: Pizza,
    text: "Pizza",
    ingredients: ["Para una base de pizza crujiente, precalienta la bandeja o piedra de hornear antes de colocar la masa. Además, un chorrito de aceite de oliva sobre los bordes antes de hornear los hará más dorados y deliciosos."],
    recipeLink: "https://alicante.com.ar/receta/2709-receta-pizza-tradicional/",
  },
  {
    image: ArrozLeche,
    text: "Arroz con leche",
    ingredients: ["Para un arroz con leche más suave y cremoso, cocina el arroz a fuego lento y añade la leche poco a poco mientras remueves. Al final, un toque de leche condensada puede hacer la diferencia."],
    recipeLink: "https://alicante.com.ar/receta/195-receta-arroz-con-leche-sin-tacc/",
  },
  {
    image: Brownie,
    text: "Brownie",
    ingredients: ["Si te gustan los brownies más húmedos, evita batir en exceso la mezcla después de añadir la harina. Y para un toque extra, incorpora trozos de chocolate o nueces justo antes de hornear."],
    recipeLink: "https://alicante.com.ar/receta/197-receta-brownie/",
  },
  {
    image: Cheesecake,
    text: "Cheesecake",
    ingredients: ["Para un cheesecake suave y sin grietas, asegúrate de que todos los ingredientes estén a temperatura ambiente antes de mezclarlos. Además, hornea a baja temperatura y utiliza un baño María para obtener una textura perfecta."],
    recipeLink: "https://alicante.com.ar/receta/201-receta-cheesecake/",
  },
];

const Inicio = () => {
  const [flippedCards, setFlippedCards] = useState({});  // Por su significado en ingles, voltea las cartas

  const handleFlip = (index) => {
    setFlippedCards((prevState) => ({  // Cambia de un lado de la carta a otra en cuanto recibe un click
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>  {/* HTML correpondiente al inicio */}
    <section className="inicio" id="recetas">
      <h1>Recetas</h1>
      <p>En este espacio, encontrarás recetas ideales tanto para salir del apuro como para esas ocasiones especiales y fines de semana. Desde opciones rápidas y fáciles para cuando el tiempo es limitado, hasta platos más elaborados para sorprender en reuniones o celebraciones, las recetas más solicitadas están aquí para satisfacer todos los gustos.</p>      
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedCards[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="card-inner">
              {/* Frente */}
              <div className="card-front">
                <img src={card.image} alt={card.text} className="card-image" />
                <p className="card-text">{card.text}</p>
                <button className="card-button">Breve descripción</button>
              </div>

              {/* Reverso */}
              <div className="card-back">
                <h3>¡A tener en cuenta!</h3>
                <ul>
                  {card.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
                <a
                  href={card.recipeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Receta Completa
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
    </>
  );
};

export default Inicio;

