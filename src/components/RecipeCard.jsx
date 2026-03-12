import React, { useState, useMemo } from 'react';
import TagBadge from './TagBadge';
import DoseControls from './DoseControls';
import StepsTable from './StepsTable';

export default function RecipeCard({ recipe }) {
  const [waterMl, setWaterMl] = useState(recipe.defaults.coffeeGrams * recipe.defaults.ratio);
  const [ratio, setRatio] = useState(recipe.defaults.ratio);

  // Reset to defaults when recipe changes
  React.useEffect(() => {
    setWaterMl(recipe.defaults.coffeeGrams * recipe.defaults.ratio);
    setRatio(recipe.defaults.ratio);
  }, [recipe.id]);

  const coffeeGrams = useMemo(() => Math.round((waterMl / ratio) * 10) / 10, [waterMl, ratio]);
  const steps = useMemo(() => recipe.steps(coffeeGrams, ratio), [recipe, coffeeGrams, ratio]);

  return (
    <div className="recipe-card" key={recipe.id}>
      <h2 className="recipe-card__name">{recipe.name}</h2>
      <p className="recipe-card__description">{recipe.description}</p>

      <div className="tags">
        {recipe.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      <DoseControls
        waterMl={waterMl}
        ratio={ratio}
        onWaterChange={setWaterMl}
        onRatioChange={setRatio}
      />

      <div className="summary-bar">
        <div className="summary-item">
          <div className="summary-item__icon">⚖️</div>
          <div className="summary-item__data">
            <span className="summary-item__label">Dose de Café</span>
            <span className="summary-item__value">{coffeeGrams.toFixed(1)} g</span>
          </div>
        </div>
        <div className="summary-item">
          <div className="summary-item__icon">⏱️</div>
          <div className="summary-item__data">
            <span className="summary-item__label">Tempo de preparo estimado</span>
            <span className="summary-item__value">{recipe.brewTime}</span>
          </div>
        </div>
      </div>

      <StepsTable steps={steps} />
    </div>
  );
}
