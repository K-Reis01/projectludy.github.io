var imgAtual = "loob.jpeg";
var imgPositiva = "r-sim.png";

function trocar(){
    document.getElementById("figura").src =imgAtual;
    let aux = imgAtual;
    imgAtual = imgPositiva;
    imgPositiva = aux;
}