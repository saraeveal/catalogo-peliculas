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