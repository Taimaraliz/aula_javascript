function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
    //window.location.href = "ttps://globallabs.academy/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigada por passar o mouse"
    elemento.innerHTML = "obrigada por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada")
}
function funcaochange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes();)
*/


/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
    validar = false
    }  
    return validar; 
}

var idade = prompt("qual sua idade");
validaIdade(idade)
console.log(validar);
*/