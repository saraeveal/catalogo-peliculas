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

//Etapa 5 · Recomendar las no vistas
const recomendar = () => {
  return peliculas.filter(
    pelicula => pelicula.vista === false
  );
};

marcarVista("Matrix");
const pendientes = recomendar();
console.log(
  "Te recomendamos:",
  pendientes.map(
    pelicula => pelicula.titulo
  )
);

//Etapa 6 · Tiempo total visto (filter + reduce) 
const tiempoTotalVisto = () => {

  const vistas = peliculas.filter(
    pelicula => pelicula.vista
  );

  const total = vistas.reduce(
    (acumulador, pelicula) => {
      return acumulador + pelicula.duracion;
    },
    0
  );

  return total;
};

marcarVista("Inception");
console.log(
  `Tiempo total visto: ${tiempoTotalVisto()} min`
);

//🏆 Jefe Final · El menú do/while
// JEFE FINAL · MENÚ

let opcion;

do {

  opcion = prompt(
`=== MI CATÁLOGO ===

1) Agregar película
2) Ver todas
3) Marcar como vista
4) Filtrar por género
5) Recomendar
6) Tiempo total visto
7) Salir

Elige una opción:`
  );


  if (opcion === "1") {

    const titulo = prompt("Título:");
    const genero = prompt("Género:");
    const duracion = Number(
      prompt("Duración en minutos, ingresa sólo números:")
    );

    agregar(
      titulo,
      genero,
      duracion
    );

    alert("✅ Película agregada");

  }


  else if (opcion === "2") {

    let salida = "";

    peliculas.forEach(
      (pelicula, index) => {

        salida +=
`${pelicula.vista ? "[✓]" : "[ ]"} ${index + 1}. ${pelicula.titulo}
(${pelicula.genero}, ${pelicula.duracion} min)

`;

      }
    );

    alert(salida);

  }


  else if (opcion === "3") {

    const titulo =
      prompt(
        "Título a marcar:"
      );

    marcarVista(
      titulo
    );

  }


  else if (opcion === "4") {

    const genero =
      prompt(
        "Género:"
      );

    const resultado =
      porGenero(
        genero
      );

    if (
      resultado.length === 0
    ) {

      alert(
        "No hay películas de ese género"
      );

    }

    else {

      alert(
        resultado
          .map(
            pelicula =>
              pelicula.titulo
          )
          .join("\n")
      );

    }

  }


  else if (opcion === "5") {

    const pendientes =
      recomendar();

    alert(
      "Te recomendamos:\n\n" +
      pendientes
        .map(
          pelicula =>
            pelicula.titulo
        )
        .join("\n")
    );

  }


  else if (opcion === "6") {

    alert(
      `Tiempo visto:
${tiempoTotalVisto()} min`
    );

  }


  else if (
    opcion !== "7"
  ) {

    alert(
      "❌ Opción inválida"
    );

  }

}
while (
  opcion !== "7"
);


alert(
  "¡Buen maratón! 🍿"
);