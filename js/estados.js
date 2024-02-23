let temporizador_activo = 0;

function establecer_tempo(tiempo_espera){
    return setInterval(() => {
        MaquinaEstados.actualizar({
            type:"temporizador"
        })
    }, tiempo_espera); 
}

const estado_base = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Está en ESTADO BASE.";
        document.querySelector("#boton1").innerText = "Cambiar a LLORAR POR COMIDA";
        document.querySelector("#boton2").innerText = "Cambiar a DORMIR";
    
        temporizador_activo = establecer_tempo(1000);
    },
    actualizar: (evento) => {
        if(evento.type == "temporizador"){
            bebe.hambre += 10
            document.querySelector("#mostrar_estado").innerText = `Nene tiene ${bebe.hambre} cantidad de hambre.`

            if (bebe.hambre>40) {
                MaquinaEstados.cambiar_estado(llorar_por_comida);
            }
        } 

        if (evento.target && evento.target.id === "boton1"){
            console.log("Houston Estamos Bien")
            MaquinaEstados.cambiar_estado(llorar_por_comida);
        } else {
            console.log("Houston hay un problema")
        }

        /*document.querySelector("#mostrar_estado").innerText = "boton pulsao"
        console.log(evento.target)*/
    },

    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Saliendo del estado BASE";
        clearInterval(temporizador_activo);
    },

}

const llorar_por_comida = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Está llorando por comida";
        document.querySelector("#boton1").innerText = "Alimentar"
        document.querySelector("#boton2").innerText = "..."

        document.querySelector("#boton2").classList.add("oculto");

        temporizador_activo = establecer_tempo(1000);
    },
    
    actualizar: (evento) => {
        if(evento.type == "temporizador"){
            bebe.hambre += 10
        }
        if (evento.target && evento.target.id === "boton1"){
            bebe.hambre = 0;
            MaquinaEstados.cambiar_estado(estado_base);
        } if (bebe.hambre > 100 ) {
            MaquinaEstados.cambiar_estado(muriendo);
        }
    },

    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Saliendo de LLORAR POR COMIDA"
        document.querySelector("#boton2").classList.remove("oculto");
        clearInterval(temporizador_activo);
    },

}

const muriendo = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Se petateó V_V"
        document.querySelector("#boton1").innertext = "HEAL"
        document.querySelector("#boton2").innertext = "..."

        document.querySelector("#boton2").classList.add("oculto")

    },
    actualizar: () => {
        if (evento.target && evento.target.id === "boton1"){
            bebe.hambre = 0;
            bebe.necesidades = 0;
            MaquinaEstados.cambiar_estado(estado_base);
        }
    },
    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "no pos... Lo reviviste Scooby"
        document.querySelector("#boton2").classList.remove("oculto");
        clearInterval(temporizador_activo);
    },
}

const llorar_por_panales = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Se le ensució el PAÑAL";
        document.querySelector("#boton1").innerText = "Cambiar"
        document.querySelector("#boton2").innerText = "..."

        document.querySelector("#boton2").classList.add("oculto");

        temporizador_activo = establecer_tempo(1000);
    }, 

    actualizar:(evento) => {
        if(evento.type == "temporizador") {
            bebe.necesidades += 10
        }
        if (evento.target && evento.target.id === "boton1"){
            bebe.necesidades = 0;
            MaquinaEstados.cambiar_estado(estado_base);
        } if (bebe.necesidades > 150 ) {
            MaquinaEstados.cambiar_estado(infeccion);
        }
    },

    finalizar:() => {
        document.querySelector("#mostrar_estado").innerText = "Saliendo de LLORAR POR PAÑAL"
        document.querySelector("#boton2").classList.remove("oculto");
        clearInterval(temporizador_activo);
    }
}

const infección = {
    
}