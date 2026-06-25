//Etapa 1 · El catálogo inicial
const peliculas = [
  { titulo: "Matrix", genero: "Acción", duracion: 136, vista: false },
  { titulo: "Coco", genero: "Animación", duracion: 105, vista: false },
  { titulo: "Inception", genero: "Acción", duracion: 148, vista: false },
];

peliculas.forEach((pelicula, index) => {
  console.log(
    `${index + 1}. ${pelicula.titulo} (${pelicula.genero}, ${pelicula.duracion} min)`
  );
});

//Etapa 2 · Agregar películas
const agregar = (titulo, genero, duracion) => {
  peliculas.push({
    titulo: titulo,
    genero: genero,
    duracion: duracion,
    vista: false
  });
};

agregar("Toy Story", "Animación", 81);
console.log(`Total de películas: ${peliculas.length}`);

//Etapa 3 · Marcar como vista (find + cambiar estado)
const marcarVista = (titulo) => {

  const pelicula = peliculas.find(
    pelicula => pelicula.titulo === titulo
  );

  if (!pelicula) {
    console.log(`❌ No existe: ${titulo}`);
    return;
  }

  pelicula.vista = true;

  console.log(`✅ Marcada como vista: ${titulo}`);
};

marcarVista("Matrix");
marcarVista("Avatar");

//Etapa 4 · Filtrar por género
const porGenero = (genero) => {
  return peliculas.filter(
    pelicula => pelicula.genero === genero
  );
};

const accion = porGenero("Acción");
console.log(
  "Acción:",
  accion.map(pelicula => pelicula.titulo)
);