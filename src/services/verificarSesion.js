export async function verificarSesion() {
    try {
        const response = await fetch("https://apiblog.hitpoly.com/ajax/usuarioController.php", {
            method: "POST",
            credentials: "include",  // Asegúrate de incluir las cookies
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ funcion: "verificar_sesion" })
        });

        const data = await response.json();
        console.log(data); // Verifica la respuesta completa

        if (data.status === "error") {
            console.error("No session found");
        } else {
            console.log("Sesion encontrada", data);
        }
    } catch (error) {
        console.error("Error al verificar sesión:", error);
    }
}
