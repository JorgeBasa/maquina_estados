const estado_actual = estado_base;

const MaquinaEstados = {

    actualizar: (evento) => {
        console.log(estado_actual);
        estado_actual.actualizar(evento)
    },

    cambiar_estado:(estado_nuevo) => {

        console.log("---(cambiando estado)---");
        console.log(estado_nuevo);
    }

}