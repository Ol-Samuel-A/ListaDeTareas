let botonAñade = document.getElementById("btnAgregar");
let botonElimina = document.getElementById("btnEliminar")

botonAñade.addEventListener("click",() => {
    console.log("Se a presionado el boton añade");
    let  contenedor = document.getElementById("containt");
    let nuevaTarea = document.createElement("div");
    nuevaTarea.className = "tarea";
    nuevaTarea.textContent = "Tarea";
    containt.appendChild(nuevaTarea);
    
});
botonElimina.addEventListener("click",()=>{
    let contenedorson = document.getElementById("containt");
    let tareas = contenedorson.getElementsByClassName("tarea");
        if(tareas.length > 0)
        {
            contenedorson.removeChild(tareas[tareas.length - 1])
        }
});