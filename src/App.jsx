import React, { useState } from 'react';
import Header from './components/Header';
import RecipeTabs from './components/RecipeTabs';
import RecipeCard from './components/RecipeCard';
import recipes from './data/recipes';
import './App.css';

function App() {
  const [activeId, setActiveId] = useState(recipes[0].id);
  const activeRecipe = recipes.find((r) => r.id === activeId);

  return (
    <>
      <Header />
      <RecipeTabs recipes={recipes} activeId={activeId} onSelect={setActiveId} />
      {activeRecipe && <RecipeCard recipe={activeRecipe} />}
    </>
  );
}

export default App;
