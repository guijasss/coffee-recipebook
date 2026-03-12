// Coffee Recipe Book — Recipe Data
// Each recipe has a `steps` function that recalculates values based on dose (g) and ratio

const recipes = [
  {
    id: 'v60-dose',
    name: 'V60 Dose-Based',
    description:
      'Receita V60 baseada na dose do café. Os pours são calculados proporcionalmente à massa de café, garantindo consistência independente da dose.',
    tags: ['pour-over', 'v60', 'dose-based'],
    defaults: { coffeeGrams: 13, ratio: 15 },
    steps: (C, R) => {
      const W = C * R;
      const B = 2 * C;
      const T1 = 7.5 * C;
      const T2 = 11.25 * C;
      const T3 = W;
      return [
        { label: 'Bloom', waterAdd: B, cumulative: B, duration: '0:00 – 0:45', note: 'Molhe todo o café e aguarde' },
        { label: 'Pour 1', waterAdd: +(T1 - B).toFixed(1), cumulative: +T1.toFixed(1), duration: '0:45 – 1:15', note: 'Despeje em espiral do centro para fora' },
        { label: 'Pour 2', waterAdd: +(T2 - T1).toFixed(1), cumulative: +T2.toFixed(1), duration: '1:15 – 1:45', note: 'Espiral suave, manter nível d\'água' },
        { label: 'Pour 3', waterAdd: +(T3 - T2).toFixed(1), cumulative: +T3.toFixed(1), duration: '1:45 – 2:15', note: 'Pour final até completar o volume' },
      ];
    },
    totalWater: (C, R) => C * R,
    brewTime: '2:30 – 3:30',
  },
  {
    id: 'v60-classic',
    name: 'V60 Clássico',
    description:
      'Receita V60 clássica com proporção 1:15. Bloom seguido de 3 pours iguais para um resultado equilibrado e limpo.',
    tags: ['pour-over', 'v60', 'classic'],
    defaults: { coffeeGrams: 15, ratio: 15 },
    steps: (C, R) => {
      const W = C * R;
      const B = 2 * C;
      const remaining = W - B;
      const pour = +(remaining / 3).toFixed(1);
      const pour3 = +(remaining - pour * 2).toFixed(1);
      return [
        { label: 'Bloom', waterAdd: B, cumulative: B, duration: '0:00 – 0:45', note: 'Saturar todo o café uniformemente' },
        { label: 'Pour 1', waterAdd: pour, cumulative: +(B + pour).toFixed(1), duration: '0:45 – 1:15', note: 'Espiral lenta do centro para fora' },
        { label: 'Pour 2', waterAdd: pour, cumulative: +(B + pour * 2).toFixed(1), duration: '1:15 – 1:45', note: 'Manter ritmo constante' },
        { label: 'Pour 3', waterAdd: pour3, cumulative: +W.toFixed(1), duration: '1:45 – 2:15', note: 'Completar até o volume total' },
      ];
    },
    totalWater: (C, R) => C * R,
    brewTime: '2:30 – 3:30',
  },
  {
    id: 'french-press',
    name: 'French Press',
    description:
      'Imersão total com proporção 1:12. Café moído grosso, tempo de infusão de 4 minutos para corpo intenso e textura aveludada.',
    tags: ['immersion', 'french-press', 'full-body'],
    defaults: { coffeeGrams: 18, ratio: 12 },
    steps: (C, R) => {
      const W = C * R;
      const half = +(W / 2).toFixed(1);
      const rest = +(W - half).toFixed(1);
      return [
        { label: 'Adicionar água (1ª metade)', waterAdd: half, cumulative: half, duration: '0:00 – 0:10', note: 'Despejar metade da água e mexer' },
        { label: 'Adicionar água (2ª metade)', waterAdd: rest, cumulative: +W.toFixed(1), duration: '0:10 – 0:20', note: 'Completar com o restante da água' },
        { label: 'Infusão', waterAdd: 0, cumulative: +W.toFixed(1), duration: '0:20 – 4:00', note: 'Aguardar sem mexer, tampa sobre o êmbolo' },
        { label: 'Pressionar & servir', waterAdd: 0, cumulative: +W.toFixed(1), duration: '4:00 – 4:30', note: 'Pressionar o êmbolo lentamente e servir' },
      ];
    },
    totalWater: (C, R) => C * R,
    brewTime: '4:00 – 5:00',
  },
  {
    id: 'aeropress',
    name: 'AeroPress Invertido',
    description:
      'Método invertido com proporção 1:6 (concentrado). Ideal para café encorpado; adicionar água quente (bypass) na xícara para diluir ao gosto.',
    tags: ['pressure', 'aeropress', 'inverted', 'concentrate'],
    defaults: { coffeeGrams: 15, ratio: 6 },
    steps: (C, R) => {
      const W = C * R;
      return [
        { label: 'Adicionar café', waterAdd: 0, cumulative: 0, duration: '0:00', note: `Colocar ${C}g de café moído médio-fino` },
        { label: 'Adicionar água', waterAdd: +W.toFixed(1), cumulative: +W.toFixed(1), duration: '0:00 – 0:15', note: 'Despejar toda a água e mexer 10s' },
        { label: 'Infusão', waterAdd: 0, cumulative: +W.toFixed(1), duration: '0:15 – 1:30', note: 'Aguardar com o êmbolo posicionado' },
        { label: 'Pressionar & servir', waterAdd: 0, cumulative: +W.toFixed(1), duration: '1:30 – 2:00', note: 'Inverter e pressionar por 30s. Bypass opcional.' },
      ];
    },
    totalWater: (C, R) => C * R,
    brewTime: '1:30 – 2:00',
  },
];

export default recipes;
