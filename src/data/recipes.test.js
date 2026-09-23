import test from 'node:test';
import assert from 'node:assert/strict';

import recipes, {
  aeroPressRecipe,
  frenchPressRecipe,
  melitta103Recipe,
  v60ClassicRecipe,
  v60DoseRecipe,
} from './recipes.js';

test('exports each recipe and preserves default recipe order', () => {
  assert.deepEqual(recipes, [
    v60DoseRecipe,
    v60ClassicRecipe,
    melitta103Recipe,
    frenchPressRecipe,
    aeroPressRecipe,
  ]);
});
