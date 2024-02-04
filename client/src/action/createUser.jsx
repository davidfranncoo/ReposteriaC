import axios from "axios";

async function newUser(payload) {
  try {
    const response = await axios.post("http://localhost:3001/singup", payload);
    const status = response.status;
    console.log("statussss", status);
    
    // Aquí manejas la respuesta de manera apropiada, por ejemplo, devolverla o hacer algo con ella
    return handleAlert(status);
  } catch (error) {
    const status = error.response.status;
    console.log("statussss errror", status);
    
    // Aquí manejas el error de manera apropiada, por ejemplo, devolver un mensaje de error
    return handleAlert(status);
  }
}

function handleAlert(props) {
  if (props === 200) {
    return "SE CREO EL USUARIO";
  }
  if (props === 300 || props === 409) {
    return "EL CORREO YA EXISTE";
  }
  return "Algo inesperado ocurrió";
}

export default newUser;
