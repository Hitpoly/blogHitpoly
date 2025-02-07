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

        // Cambio: redirige al login si el status no es success
        if (!data || data.status !== "success") {
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
