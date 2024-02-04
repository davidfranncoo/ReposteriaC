import axios from "axios";

async function newUser(payload) {
  try {
    const response = await axios.post("http://localhost:3001/singup", payload);
    const status = response.status;
    console.log("statussss", status);
    return handleAlert(status);
  } catch (error) {
    const status = error.response.status;
    console.log("statussss errror", status);
    return handleAlert(status);
  }
}

function handleAlert(props) {
  if (props === 200) {
    return 200;
  }
  if (props === 300) {
    return 300;
  }
  if (props === 409) {
    return 409;
  }
  return "Algo inesperado ocurrió";
}

export default newUser;
