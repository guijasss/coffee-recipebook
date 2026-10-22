// Coffee Recipe Book — Recipe Data
// Each recipe has a `steps` function that recalculates values based on dose (g) and ratio

export const v60DoseRecipe = {
    id: 'v60-dose',
    name: 'V60 — James Hoffmann',
    description:
      'A técnica definitiva de V60 de James Hoffmann, com proporção aproximada de 60 g/L (1:17).',
    tags: ['pour-over', 'v60', 'dose-based'],
    defaults: { coffeeGrams: 30, ratio: 17 },
    steps: (C, R) => {
      const W = C * R;
      const bloom = 2 * C;
      const secondTarget = Math.max(bloom, 0.6 * W);
      const secondPour = secondTarget - bloom;
      const finalPour = W - secondTarget;
      return [
        {
          label: 'Prepare o café e o filtro',
          note: `Moa ${C.toFixed(1)} g de café em moagem média-fina. Enxágue o filtro com água recém-fervida para remover o gosto de papel e pré-aquecer o V60; adicione o café e faça um pequeno poço no centro.`,
        },
        {
          label: 'Inicie o cronômetro e faça a pré-infusão',
          waterAdd: +bloom.toFixed(1),
          cumulative: +bloom.toFixed(1),
          duration: '0:00',
          note: `Adicione 2× a dose de café (${bloom.toFixed(1)} g de água; não ultrapasse 3×).`,
        },
        {
          label: 'Misture e aguarde a pré-infusão',
          duration: '0:00 – 0:45',
          note: 'Gire o V60 até molhar uniformemente todo o pó, sem usar colher. A pré-infusão ajuda a liberar o CO₂ e favorece a extração.',
        },
        {
          label: 'Despejo até 60% da água total',
          waterAdd: +secondPour.toFixed(1),
          cumulative: +secondTarget.toFixed(1),
          duration: '0:45 – 1:15',
          note: `Despeje ${secondPour.toFixed(1)} g em 30 s (cerca de ${(secondPour / 30).toFixed(1)} g/s), até atingir ${secondTarget.toFixed(1)} g no total — 60% de ${W.toFixed(1)} g. Um V60 cheio ajuda a manter a temperatura; pode despejar diretamente sobre o filtro.`,
        },
        {
          label: 'Complete a água',
          waterAdd: +finalPour.toFixed(1),
          cumulative: +W.toFixed(1),
          duration: '1:15 – 1:45',
          note: `Adicione os ${finalPour.toFixed(1)} g restantes em 30 s (cerca de ${(finalPour / 30).toFixed(1)} g/s), até ${W.toFixed(1)} g no total. Despeje um pouco mais devagar que na primeira fase e sem agitar demais.`,
        },
        {
          label: 'Mexa e nivele a cama de café',
          duration: '1:45',
          note: 'Mexa uma vez no sentido horário e uma vez no anti-horário para soltar o pó das paredes. Aguarde o nível baixar um pouco e gire suavemente o V60 para nivelar a cama de café.',
        },
        {
          label: 'Aguarde a drenagem',
          duration: 'até 3:30',
          note: 'Deixe a água terminar de passar. Temperaturas mais altas aceleram a drenagem, e o papel do filtro também influencia o tempo.',
        },
      ];
    },
    totalWater: (C, R) => C * R,
    brewTime: 'até 3:30',
    grindSetting: {
      grinder: 'Moagem média-fina',
      clicks: 'Média-fina',
      note: 'Ajuste conforme o café e o tempo de drenagem.',
    },
    waterTemperature: 'Quanto mais quente, melhor (especialmente para torra clara)',
    highlights: [
      'Proporção aproximada: 60 g/L (1:17, ou 30 g de café para 510 ml de água).',
      'A meta é terminar a drenagem até 3:30; temperatura e papel do filtro afetam esse tempo.',
    ],
};

export const v60ClassicRecipe = {
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
    grindSetting: {
      grinder: 'iCoffee M3 Pro',
      clicks: '21 clicks',
      note: 'Moagem usada nos métodos baseados em V60.',
    },
    waterTemperature: '93–96°C',
};

export const melitta103Recipe = {
    id: 'melitta-103',
    name: 'Melitta 103',
    description:
      'Receita para Melitta 103. Bloom generoso e dois despejos principais para conduzir a extração.',
    tags: ['pour-over', 'melitta-103', 'video-recipe'],
    defaults: { coffeeGrams: 20, ratio: 15 },
    steps: (C, R) => {
      const W = C * R;
      const firstPour = 3 * C;
      const secondTarget = 9 * C;
      return [
        {
          label: 'Primeiro despejo',
          waterAdd: +firstPour.toFixed(1),
          cumulative: +firstPour.toFixed(1),
          duration: '0:00 – 0:30',
          note: 'Umedecer todo o café de forma uniforme e aguardar a absorção.',
        },
        {
          label: 'Segundo despejo',
          waterAdd: +(secondTarget - firstPour).toFixed(1),
          cumulative: +secondTarget.toFixed(1),
          duration: '0:30 – 1:15',
          note: 'Movimento circular do centro para as bordas, retornando ao centro.',
        },
        {
          label: 'Terceiro despejo',
          waterAdd: +(W - secondTarget).toFixed(1),
          cumulative: +W.toFixed(1),
          duration: '1:15 – 3:15',
          note: 'Espiral para resgatar o café das paredes do filtro e levar ao centro.',
        },
      ];
    },
    totalWater: (C, R) => C * R,
    brewTime: '3:15 (referência)',
    grindSetting: {
      grinder: 'iCoffee M3 Pro',
      clicks: '24 clicks',
      note: 'Moagem usada para o Melitta 103.',
    },
    waterTemperature: '95°C',
    highlights: [
      'Referência do vídeo: 300ml de água para 20g de café.',
      'Temperatura da água em torno de 95°C.',
      'Moagem usada no vídeo: 24 clicks no iCoffee M3 Pro.',
      'Se amargar, moa mais grosso. Se ficar sem sabor ou muito ácido, moa mais fino.',
    ],
};

export const frenchPressRecipe = {
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
    grindSetting: {
      grinder: 'iCoffee M3 Pro',
      clicks: '26 clicks',
      note: 'Estimativa para moagem grossa, seguindo a recomendação típica de French Press.',
    },
    waterTemperature: '93–96°C',
};

export const aeroPressRecipe = {
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
    grindSetting: {
      grinder: 'iCoffee M3 Pro',
      clicks: '20 clicks',
      note: 'Estimativa para moagem média-fina, seguindo a recomendação típica de AeroPress.',
    },
    waterTemperature: '85–96°C',
};

export const mokaPotRecipe = {
  id: 'moka-pot',
  name: 'Moka Pot',
  description:
    'Extração concentrada com água pré-aquecida. Moagem média-fina e fogo baixo para preservar doçura, corpo e intensidade sem excesso de amargor.',
  tags: ['stovetop', 'moka-pot', 'full-body', 'concentrated'],
  defaults: { coffeeGrams: 18, ratio: 6 },
  steps: (C, R) => {
    const W = C * R;
    return [
      {
        label: 'Aquecer a água',
        waterAdd: W,
        cumulative: +W.toFixed(1),
        duration: '0:00 – 2:00',
        note: 'Aquecer a água até aproximadamente 90–95°C',
      },
      {
        label: 'Adicionar café',
        waterAdd: 0,
        cumulative: +W.toFixed(1),
        duration: '2:00 – 2:20',
        note: 'Adicionar o café ao filtro e nivelar sem compactar',
      },
      {
        label: 'Extração',
        waterAdd: 0,
        cumulative: +W.toFixed(1),
        duration: '2:20 – 4:00',
        note: 'Montar a Moka e extrair em fogo baixo até o fluxo começar a clarear',
      },
      {
        label: 'Interromper & servir',
        waterAdd: 0,
        cumulative: +W.toFixed(1),
        duration: '4:00 – 4:30',
        note: 'Retirar do fogo antes do borbulhamento e resfriar a base brevemente',
      },
    ];
  },
  totalWater: (C, R) => C * R,
  brewTime: '4:00 – 4:30',
  grindSetting: {
    grinder: 'iCoffee M3 Pro',
    clicks: '18–22 clicks',
    note: 'Estimativa para moagem média-fina. Ajustar conforme o fluxo e o sabor na xícara.',
  },
  waterTemperature: '90–95°C',
};

const recipes = [
  v60DoseRecipe,
  mokaPotRecipe,
  melitta103Recipe,
  frenchPressRecipe,
  aeroPressRecipe,
];

export default recipes;
