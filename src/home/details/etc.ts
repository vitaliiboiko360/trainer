export const WIDTH = 40;
//assuming root element 1rem = 30px
export const WIDTH_PX = 40 * 30;
export const WIDTH_REM = `${WIDTH}rem`;
export const HEIGHT = 15;
export const HEIGHT_PX = 15 * 30;
export const HEIGHT_REM = `${HEIGHT}rem`;
export const CENTER_X = 20;
export const CENTER_Y = 7.5;
export const CENTER_X_REM = '20rem';
export const CENTER_Y_REM = '7.5rem';

export const xmlnsSvg = 'http://www.w3.org/2000/svg';
export const xmlnsXhtml = 'http://www.w3.org/1999/xhtml';

export const IMG_POINT_HAND_SRC = '/data/backhand-index-pointing-up_1f446.png';

export const TXT_LINES = [
  'Una vida dulce',
  'Hoy es un día perfecto.',
  '¿Sabes por qué? Porque hoy hay tarta de postre.',
  'Efectivamente, me gusta comer dulces.',
  'Por eso estoy tan contento.',
  'Yo vivo solo y nunca compro tartas o dulces.',
  'Como postre solo un día a la semana.',
  'Todos los miércoles, ceno en casa de mis padres y mi madre hace una tarta.',
  'Me gustan las tartas grandes, pero mi madre solo hace tartas pequeñas.',
  'Ella siempre dice “esta es una tarta con pocos ingredientes, pero con mucho amor”.',
  'El azúcar está muy rico, pero es malo para la salud.',
  'Por eso, ella hace tartas pequeñas.',
  'Creo que es una buena idea: es un equilibrio entre vida dulce y vida sana.',
  'A veces, intento hacer postres en casa.',
  'Normalmente, busco recetas por internet.',
  'Pero siempre hago algo mal.',
  'Casi siempre olvido un ingrediente.',
  'Y, a veces, pongo la tarta en el horno, voy a ver la tele y me olvido de todo.',
  'Dos horas después, tengo un postre negro en la mesa de la cocina.',
];

export function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export const SVG_SRC = '/data/listening-head.svg';

export const SVG_DIMS = {
  width: '10rem',
  height: '10rem',
};

export const SVG_DIMS_2 = {
  width: '800px',
  height: '800px',
};

export const POINT_HAND_PATH_ID = 'point-hand-path-id';
