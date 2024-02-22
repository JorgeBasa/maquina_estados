var estado_base = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Neutral.";
        document.querySelector("#boton1").innerText = "Alimentar";
        document.querySelector("#boton2").classList.add="oculto"; 
    
    },
    
    actualizar: (evento) => {
        document.querySelector("#mostrar_estado").innerText = "boton pulsao"
        console.log(evento.target)

        if(evento.type == "temporizador"){
            bebe.hambre += 10
            document.querySelector("#mostrar_estado").innerText = `Nene tiene ${bebe.hambre} cantidad de hambre.`
        } bebe.hambre<90

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
    
    actualizar: (evento) => {
        if (evento.target && evento.target.id === "boton1"){
            console.log("Come we");
            //MaquinaEstados.cambiar_estado(estado_base);
        } else {
            console.log("dafuq?")
        }
    },

    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Saliendo del estado: llorando por comida"
    },

}

/*var Dormir {
    
}*/