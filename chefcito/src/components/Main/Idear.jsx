import { useState, useEffect } from 'react';
import "./Idear.css";

const Idear = () => {
  const [ingredients, setIngredients] = useState([
// Vegetales
{ name: 'Tomate', category: 'Vegetales', score: 10 },
{ name: 'Espinaca', category: 'Vegetales', score: 15 },
{ name: 'Lechuga', category: 'Vegetales', score: 8 },
{ name: 'Brócoli', category: 'Vegetales', score: 18 },
{ name: 'Zanahoria', category: 'Vegetales', score: 12 },
{ name: 'Pepino', category: 'Vegetales', score: 7 },
{ name: 'Palta', category: 'Vegetales', score: 25 },
{ name: 'Calabaza', category: 'Vegetales', score: 13 },
{ name: 'Champiñones', category: 'Vegetales', score: 10 },
{ name: 'Berenjena', category: 'Vegetales', score: 12 },


// Proteínas
{ name: 'Pollo', category: 'Proteínas', score: 25 },
{ name: 'Carne de res', category: 'Proteínas', score: 30 },
{ name: 'Pescado', category: 'Proteínas', score: 28 },
{ name: 'Huevo', category: 'Proteínas', score: 18 },
{ name: 'Lentejas', category: 'Proteínas', score: 22 },
{ name: 'Pechuga de pavo', category: 'Proteínas', score: 24 },
{ name: 'Carne de cerdo', category: 'Proteínas', score: 27 },
{ name: 'Atún', category: 'Proteínas', score: 26 },
{ name: 'Garbanzos', category: 'Proteínas', score: 21 },
{ name: 'Almendras', category: 'Proteínas', score: 19 },



// Carbohidratos
{ name: 'Arroz', category: 'Carbohidratos', score: 20 },
{ name: 'Pasta', category: 'Carbohidratos', score: 23 },
{ name: 'Papa', category: 'Carbohidratos', score: 18 },
{ name: 'Pan', category: 'Carbohidratos', score: 25 },
{ name: 'Maíz', category: 'Carbohidratos', score: 22 },
{ name: 'Batata', category: 'Carbohidratos', score: 24 },
{ name: 'Avena', category: 'Carbohidratos', score: 27 },
{ name: 'Galletas', category: 'Carbohidratos', score: 20 },
{ name: 'Harina', category: 'Carbohidratos', score: 22 },
{ name: 'Cereal', category: 'Carbohidratos', score: 24 },
  ]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [nutritionalScore, setNutritionalScore] = useState(0);
  const [ingredientToAdd, setIngredientToAdd] = useState(null);
  const [grams, setGrams] = useState('');

  // use Effect para actualizar el puntaje nutricional. Utiliza la lógica de un regla de tres simples. El score por defecto se corresponde a 1000gr del alimento selecionado.
  useEffect(() => {
    const score = selectedIngredients.reduce(
      (total, ingredient) => total + ingredient.score,
      0
    );
    setNutritionalScore(score);
  }, [selectedIngredients]);

  // Drag and drop. Arrastre del ingrediente, permitiendo que se quede guardado tanto en su lugar original como en el nuevo. 
  const handleDragStart = (e, ingredient) => {
    e.dataTransfer.setData('ingredient', JSON.stringify(ingredient));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const ingredient = JSON.parse(e.dataTransfer.getData('ingredient'));
    setIngredientToAdd(ingredient);
  };

  const handleConfirmIngredient = () => {
    if (!grams || isNaN(grams) || grams <= 0) {
      alert('Por favor, ingresa una cantidad válida.');
      return;
    }

    const scorePerGram = ingredientToAdd.score / 1000;
    const adjustedScore = scorePerGram * grams;

    setSelectedIngredients((prev) => [
      ...prev,
      { ...ingredientToAdd, grams, score: adjustedScore },
    ]);

    setIngredientToAdd(null); 
    setGrams(''); 
  };

  // Guardar la receta en localStorage
  const handleSaveRecipe = () => {
    if (!recipeName.trim() || selectedIngredients.length === 0) {
      alert('Por favor, ingresa un nombre y selecciona ingredientes.');
      return;
    }

    const newRecipe = {
      name: recipeName,
      ingredients: selectedIngredients,
      score: nutritionalScore,
    };

    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const updatedRecipes = [...savedRecipes, newRecipe];
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

    setRecipeName('');
    setSelectedIngredients([]);
    setNutritionalScore(0);
    alert('Receta guardada con éxito');
  };

  return (
    <>  {/* HTML base de idear */}
      <section className="idear-container">
        <h1 id="idear">Idear</h1>
        <h2>¡Pon a prueba tu creatividad!</h2>
        <p>Arrastra los ingredientes y especifica la cantidad para calcular el valor nutricional.</p>
        <input
          type="text"
          placeholder="Nombre de la receta"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />

        {/* Lista de ingredientes */}
        <div className="ingredient-list">
          {['Vegetales', 'Proteínas', 'Carbohidratos'].map((category) => (
            <div key={category} className="category-section">
              <h3>{category}</h3>
              {ingredients
                .filter((ingredient) => ingredient.category === category)
                .map((ingredient) => (
                  <div
                    key={ingredient.name}
                    draggable
                    onDragStart={(e) => handleDragStart(e, ingredient)}
                    className="ingredient-item"
                  >
                    {ingredient.name}
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Zona de arrastre */}
        <div
          className="drop-zone"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3>Arrastra aquí tus ingredientes</h3>
          {selectedIngredients.map((ingredient, index) => (
            <div key={index} className="ingredient-item">
              {ingredient.name} - {ingredient.grams}g
            </div>
          ))}
        </div>

        <h2 className='nutric'>Puntaje nutricional: {nutritionalScore}</h2>
        <button className="save-recipe" onClick={handleSaveRecipe}>Guardar Receta</button>
      

      {/* Ingreso de la cantidad en gramos */}
      {ingredientToAdd && (
        <div className="modal">
          <h3>¿Cuántos gramos de {ingredientToAdd.name}?</h3>
          <input
            type="number"
            value={grams}
            onChange={(e) => setGrams(e.target.value)}
            placeholder="Cantidad en gramos"
            min="1"
          />
          <button onClick={handleConfirmIngredient}>Confirmar</button>
          <button onClick={() => setIngredientToAdd(null)}>Cancelar</button>
        </div>
      )}
      </section>
    </>
  );
};

export default Idear;
