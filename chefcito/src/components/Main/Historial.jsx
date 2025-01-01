import { useState, useEffect } from 'react';
import './Historial.css';

const Historial = () => {
  const [recipes, setRecipes] = useState([]);

  // Cargar recetas desde localStorage
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  // Eliminar una receta por índice
  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes)); // Actualizar localStorage
  };

  return (
    <>
      <section className="historial-container">
        <h1 id="historial">Historial</h1>
        {recipes.length === 0 ? (
          <p>No hay recetas guardadas.</p>
        ) : (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>
                <h3>{recipe.name}</h3>
                <p>
                  Ingredientes:
                  {recipe.ingredients.map((ing, ingIndex) => (
                    <span key={ingIndex}>
                      {ing.name} - {ing.grams}g
                      {ingIndex < recipe.ingredients.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <p>Puntaje Nutricional: {recipe.score}</p>
                <button onClick={() => deleteRecipe(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Historial;
