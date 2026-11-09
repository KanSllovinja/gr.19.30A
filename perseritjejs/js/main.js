var butoni1 = document.getElementById("btn1");
var butoni2 = document.getElementById("btn2");
var butoni3 = document.getElementById("btn3");
var butoni4 = document.getElementById("btn4");
var teksti = document.getElementById("teksti");
butoni1.onclick = function(){
    alert("blerje e sukseshme")
}

butoni2.onmouseover = function(){
    alert("Ti e ke mausi mbi mu")
}

butoni3.onmouseleave = function(){
    alert("Ti e largove mausin prej meje")
}

butoni4.onclick = function(){
teksti.style.color = "red"
teksti.style.backgroundColor = "grey"
teksti.style.fontSize = "40px"
}