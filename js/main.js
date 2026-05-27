document.addEventListener("DOMContentLoaded", () => {
    const statusContainer = document.getElementById("status-container");

    // Datos simulados de las líneas
    const lineasStatus = [
        { nombre: "Línea C", estado: "Normal", color: "#0078C1" },
        { nombre: "Línea E", estado: "Demora de 10 min", color: "#6F2B8C" }
    ];

    if (statusContainer) {
        lineasStatus.forEach(linea => {
            const div = document.createElement("div");
            div.className = "card-status";
            div.style.borderLeft = `5px solid ${linea.color}`;
            div.innerHTML = `
                <h3>${linea.nombre}</h3>
                <p>Estado: <strong style="color: ${linea.estado === 'Normal' ? 'green' : 'orange'}">${linea.estado}</strong></p>
            `;
            statusContainer.appendChild(div);
        });
    }
});