

function saludar(nombreUsuario){
    return "Bienvenido a TRIVIAS JP&S" + nombreUsuario
    console.log("Bienvenido a TRIVIAS JP&S")
}
saludar()

 
// document.getElementById("Guau")
// console.log(document.getElementById("Guau"))
function siguiente(){
    console.log("estoyDentroDeLaPregunta1")
    // console.log(document.getElementById("Guau").value)
    // console.log("estado Perro",document.getElementById("Guau").checked)

    // local variable
    var lvPerro = document.getElementById("Guau").checked;
    // console.log("lvPerro",lvPerro)
    
    if (lvPerro){
        alert ("Genial ACERTASTE")
        window.location="pregunta2.html";
    }
        else {
            alert ("Vuelve a Intentarlo")
    }
}

function p2siguiente(){
    console.log ("estoyDentroDeLaPregunta2")
        var Respuesta2 = document.getElementById("p2Miau").checked;
       
    if (Respuesta2){
        alert ("Genial ACERTASTE")
        window.location="pregunta3.html";
    }
        else {
            alert ("Vuelve a Intentarlo")
    }
}

function p3siguiente(){
    console.log ("estoyDentroDeLaPregunta3")
        var Respuesta3 = document.getElementById("p3Pío").checked;
       
    if (Respuesta3){
        alert ("Genial ACERTASTE")}
        else {
            alert ("Vuelve a Intentarlo")
        }
    }

    function inicio(){
        window.location="index.html";
    }
    