export async function verificarSesion() {
    try {
        const response = await fetch('https://apiblog.hitpoly.com/ajax/usuarioController.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                funcion: "verificar_sesion",
                id: 5 // ejemplo de id
            })
        });

        // Si la respuesta no es 200 se redirige al login
        if (!response.ok) {
            window.location.href = "/login";
            return;
        }

        const data = await response.json();

        // Si los datos están vacíos o no existen la sesión se redirige al login
        if (!data || Object.keys(data).length === 0) {
            window.location.href = "/login";
            return;
        }

        // Devuelve los datos del usuario si todo salió bien
        return data;
    } catch (error) {
        console.error("Error al verificar sesión:", error);
        window.location.href = "/login";
    }
}
