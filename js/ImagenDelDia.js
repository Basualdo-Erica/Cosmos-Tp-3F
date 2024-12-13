// cargarImagenDelDia.js
const apiKey = 'BdFBN18eVkWhAduvvxjgmeGu4AXeGe5E1k1mvFyS';
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;


const cargarImagenDelDia = async () => {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error("Error en la respuesta de la API");
    const data = await respuesta.json();

    // Seleccionar el contenedor principal
    const contenedorImagen = document.getElementById("imagen-dia");

    // Generar HTML 
    contenedorImagen.innerHTML = `
      <img src="${data.url}" alt="${data.title}" class="imagen-reducida">
      <div id="contenedor-descripcion">
        <h3 id="titulo-imagen">${data.title}</h3>
        <p id="descripcion-imagen">${data.explanation}</p>
      </div>
    `;
  } catch (error) {
    console.error("Error al cargar la imagen del día:", error);

    // Mostrar mensaje de error
    const contenedorImagen = document.getElementById("imagen-dia");
    contenedorImagen.innerHTML = "<p>Lo siento, no se pudo cargar la imagen del día.</p>";
  }
};

cargarImagenDelDia();
