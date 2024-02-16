var estado_actual = estado_base;

var MaquinaEstados = {

    inicializar: () => {
        console.log("Está VIVO")
        estado_actual.inicializar()
    },

    actualizar: (evento) => {
        console.log(estado_actual);
        estado_actual.actualizar(evento);
    },

    cambiar_estado:(estado_nuevo) => {
        console.log("---(cambiando estado)---");
        console.log(estado_nuevo);

        estado_actual.finalizar()
        estado_actual = estado_nuevo
        estado_actual.inicializar()

    }

    
}