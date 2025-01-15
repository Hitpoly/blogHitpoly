import axios from "axios";

const API_URL_GET = "http://localhost/blog-admin/src/controllers/getPosts.php";
const API_URL_POST = "http://localhost/blog-admin/src/controllers/PostController.php";

// funcion para obtener los posts 

export  const getPosts = async () => {
    try {
        const response = await axios.get(API_URL_GET);
        return response.data;
    } catch (error) {
        throw new Error("Error al obtener los posts:" + error.message);
    }
};

//Funcion para crear un nuevo post 

export const createPost = async (postData, csrfToken, image) => {
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('area', postData.area);
    formData.append('csrf_token', csrfToken);
    
    // Si hay una imagen, se agrega al FormData
    if (image) {
        formData.append('image', image);
    }

    try {
        const response = await axios.post(API_URL_POST, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error detallado: ", error.response || error.message);
        throw new Error("Error al crear el post: " + (error.response?.data?.message || error.message));
    }
    
};