function changeColor() {
    let textHello = document.getElementById("text");
    textHello.style.color(random(), random(), random());
}
function random(){
    Math.floor(Math.random() * 257);
}