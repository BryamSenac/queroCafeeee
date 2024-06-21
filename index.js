let pontos = ["transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "blue"];
var barra = document.getElementById("medidor");

document.addEventListener('DOMContentLoaded', function() {
    attBarra();
});
function mais() {
    let index = pontos.lastIndexOf("transparent");
    if (index !== -1) {
        pontos[index] = "blue";
        attBarra();
    }
}

function menos() {
    let index = pontos.indexOf("blue");
    if (index !== -1) {
        pontos[index] = "transparent";
        attBarra();
    }
}
function attBarra(){
    let gradient = 'linear-gradient(';
    gradient += pontos.join(', ');
    gradient += ')';
    barra.style.backgroundImage = gradient;
}