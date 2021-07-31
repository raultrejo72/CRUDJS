document.getElementById("formulario").addEventListener("submit", crear);

    function crear(e){
        nombre = document.getElementById("nombre").value
        apellido = document.getElementById("apellido").value
        numero = document.getElementById("numero").value

    let usuario = {
        nombre, apellido, numero
    }

    if(localStorage.getItem("Usuarios") === null){
        let usuarios = []
        usuarios.push(usuario)
        localStorage.setItem("Usuarios", JSON.stringify(usuarios))
    }
    else{
        let libros = localStorage.getItem(JSON.parse("Usuarios"))
        usuarios.push(usuario)
        localStorage.setItem("Usuarios",JSON.stringify(usuarios))
    }

    document.getElementById("formulario").reset();
    console.log("Usuario guardado correctamente")
    e.preventDefault()
    }