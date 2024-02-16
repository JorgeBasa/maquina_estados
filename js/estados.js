var estado_base = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "jajaalchile";
        document.querySelector("#boton1").innerText = "Cambiar a Llorar por Comida";
        document.querySelector("#boton2").innerText = "Cambiar a Dormir";  },
    
    actualizar: (evento) => {
        document.querySelector("#mostrar_estado").innerText = "boton pulsao"
        console.log(evento.target)

        if (evento.target && evento.target.id === "boton1"){
            console.log("Houston Estamos Bien")
            MaquinaEstados.cambiar_estado(llorar_por_comida);
        } else {
            console.log("Houston la CTM")
        }
    },

    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Saliendo del estado";
    },

}

var llorar_por_comida = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Está llorando por comida"    },
    
    actualizar: () => {
        //document.querySelector("#mostrar_estado").innerText = "boton pulsao"
    },

    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Saliendo del estado y llorando por comida"
    },

}