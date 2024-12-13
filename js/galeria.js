const NASA_API_BASE = "https://images-api.nasa.gov/search?q=";
const MEDIA_TYPE = "&media_type=image"; 

const cargarGaleriaHorizontal = async (query = "stars") => {
  try {
    const respuesta = await fetch(`${NASA_API_BASE}${query}${MEDIA_TYPE}`);
    if (!respuesta.ok) throw new Error("Error al obtener imágenes");
    const datos = await respuesta.json();

    const carrusel = document.getElementById("carrusel");
    const resultados = datos.collection.items.slice(0, 10); // solo muestra las primeras 10 imagenes

    
    carrusel.innerHTML = "";

    if (resultados.length > 0) {
      resultados.forEach(imagen => {
        const imagenURL = imagen.links ? imagen.links[0].href : "";
        const img = document.createElement("img");
        img.src = imagenURL;
        img.alt = imagen.data[0].title || "Imagen NASA";
        carrusel.appendChild(img);
      });

      carrusel.classList.add("carrusel-activo");
    } else {
      carrusel.innerHTML = "<p>No se encontraron imágenes para la galería.</p>";
    }
  } catch (error) {
    console.error("Error al cargar la galería horizontal:", error);
    document.getElementById("carrusel").innerHTML = "<p>Error al cargar imágenes.</p>";
  }
};

// 
// maneja la busqueda de las imagenes
const buscarImagenes = () => {
  const query = document.getElementById("input-busqueda").value.trim(); 
  if (query) {
    cargarGaleriaHorizontal(query);
  } else {
    cargarGaleriaHorizontal(); 
  }
};

cargarGaleriaHorizontal();


document.getElementById("boton-buscar").addEventListener("click", buscarImagenes);
document.getElementById("input-busqueda").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    buscarImagenes();
  }
});
