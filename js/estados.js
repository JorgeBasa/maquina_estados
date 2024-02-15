const estado_base = {
    inicializar: () => {
        document.querySelector("#mostrar:estado"),innerText = "jajaalchile";
        document.querySelector("#boton1").innerText = "Cambiar a Llorar por Comida";
        document.querySelector("#boton2").innerText = "Cambiar a Dormir";  },
    
    actualizar: (evento) => {
        document.querySelector("#mostrar_estado").innerText = "boton pulsao",
        console.log(evento)

        if (evento.div && evento.div.id === "boton1"){
            maquina_estados.cambiar_estado(llorar_por_comida);
        }
    },

    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Saliendo del estado"
    },

}

const llorar_por_comida = {
    inicializar: () => {
        document.querySelector("#mostrar:estado").innerText = "Está llorando por comida"    },
    
    actualizar: () => {
        //document.querySelector("#mostrar_estado").innerText = "boton pulsao"
    },

    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Saliendo del estado y llorando por comida"
    },

}