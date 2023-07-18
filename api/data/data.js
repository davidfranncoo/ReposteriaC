const fs = require('fs');
const path = require('path');


const getApiData = async () => {
  try {
    const rutaArchivo = path.join(__dirname, 'data.json'); // Corrección aquí
    const datos = fs.readFileSync(rutaArchivo, 'utf8');
    const jsonData = JSON.parse(datos);
    return jsonData;
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error);
    throw error;
  }
};

// Llamada a la función para obtener los datos desde el archivo JSON
(async () => {
  try {
    const datos = await getApiData();
    console.log(datos);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
})();

module.exports = getApiData;
