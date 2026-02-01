let frutasGlobal = [];

async function obtenerFrutas(){

    const res = await fetch("http://localhost:3000/frutas");
    frutasGlobal = await res.json();

    mostrarFrutas(frutasGlobal);
}

function mostrarFrutas(frutas){

    const lista = document.querySelector(".lst_frutas");
    lista.innerHTML = "";

    frutas.forEach(crearItemFruta);
}

function crearItemFruta(fruta){

    const lista = document.querySelector(".lst_frutas");

    const item = document.createElement("div");
    item.className = "item_fruta";
    item.textContent = fruta.name;

    item.addEventListener("click", function(){
        mostrarDetalle(fruta);
    });

    lista.appendChild(item);
}

function mostrarDetalle(fruta){

    const detalle = document.querySelector(".deta_frutas");

    detalle.innerHTML = `
        <h2>${fruta.name}</h2>
        <p><strong>Familia:</strong> ${fruta.family}</p>
        <p><strong>Orden:</strong> ${fruta.order}</p>
        <p><strong>Género:</strong> ${fruta.genus}</p>

        <h3>Nutrición</h3>
        <p>Calorías: ${fruta.nutritions.calories}</p>
        <p>Azúcar: ${fruta.nutritions.sugar}</p>
        <p>Carbohidratos: ${fruta.nutritions.carbohydrates}</p>
        <p>Proteína: ${fruta.nutritions.protein}</p>
    `;
}

/* 🔥 BUSCADOR */
function activarBuscador(){

    const buscador = document.querySelector(".buscador");

    buscador.addEventListener("input", function(){

        const texto = buscador.value.toLowerCase();

        const filtradas = frutasGlobal.filter(function(fruta){
            return fruta.name.toLowerCase().includes(texto);
        });

        mostrarFrutas(filtradas);
    });
}

obtenerFrutas();
activarBuscador();
