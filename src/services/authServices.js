import axios from 'axios';


const API_URL = 'https://apiweb.hitpoly.com/ajax/';

const signin = async (email, password) => {
  const response = await axios.post(`${API_URL}usuarioController.php`, {
    funcion: 'login',
    user: email,
    pass: password,
  });
  return response.data;
};

export default {
  signin,
};
