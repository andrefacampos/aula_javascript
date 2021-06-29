
function clicou(){
   

    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://br.pinterest.com/");  //abre em outra tela
    //window.location.href = "https://br.pinterest.com/"  //abre na mesma tela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>"
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "<b>Passe o mouse aqui</b>"
    document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";

}

function load(){
    alert("Página carregada")
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*
function validaIdade(idade){
    var validar
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade))
*/

/*
function soma (n1, n2){
    return n1 + n2
}

function setReplace (frase, nome, novo_nome){
    return frase.replace (nome, novo_nome)
}

alert (soma(5, 10))
alert (setReplace("Vai Japão", "Japão", "Brasil"))
*/

/*
var d = new Date();
alert (d.getDate());
alert (d.getDay());
alert (d.getHours());
alert (d)
*/

/*
var count; //estrutura de repetição
for (count=0; count <= 5; count++)
    alert(count)
*/

/*
var count = 0 //estrutura de repetição
while (count <= 5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual é a sua idade?") //faz uma pergunta e guarda ela na variável
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
};
*/

//var frutas = [{nome:"maçã", cor:"Vermelha"}, {nome:"uva", cor:"roxo"}]
//console.log (frutas)

//var fruta = {nome:"maçã", cor:"Vermelha"}
//console.log (fruta)

//var lista = ["maçã", "pera", "laranja"];
//lista.push ("uva"); // adiciona um elemento na lista
//lista.pop (); //retira o ultimo elemento da lista
//console.log(lista.length); //Informa o tamanho da lista
//console.log(lista.reverse()); //Tras a lista na ordem inversa
//console.log(lista.toString()); //Transforma a lista em string
//console.log(lista.join(" - ")); Transforma a lista em string e substitui um item de separação

//alert(lista[1]);
//var nome = "André Felipe";
//var idade = 32;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos")
//alert(idade + idade2)
//console.log (nome);
//console.log (idade - idade2);
//console.log (frase.replace("Japão","Brasil")); // substitui a palavra
//alert (frase.replace("Japão","Brasil")) // substitui a palavra
//console.log (frase.toUpperCase()) //deixa o texto maiusculo
//console.log (frase.toLowerCase()) //deixa o texto minusculo