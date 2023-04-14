fetch("/src/colaboradores.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })


/* export const colaboradorService = {
    consultarColaboradores
} */
