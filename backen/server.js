const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// endpoint
app.get("/frutas", async (req, res) => {
    try {
        const respuesta = await fetch("https://www.fruityvice.com/api/fruit/all");
        const data = await respuesta.json();

        res.json(data);

    } catch (error) {
        res.status(500).json({ error: "Error al obtener frutas" });
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
