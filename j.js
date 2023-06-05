

var previsao = ''
var previsao2 = ''
Webcam.set({
    width: 350, 
    height: 300,
    image_format: 'png',
    png_quality: 90,
})
var camera = document.getElementById('camera')
Webcam.attach (camera)
function tirarfoto(){
    Webcam.snap (function (data_uri){
        document.getElementById ('result').innerHTML = `<img id='foto' src='${data_uri}'/> `
    })


}
console.log(ml5.version)
var classificaçao = ml5.imageClassifier ('https://teachablemachine.withgoogle.com/models/Rcq_NXgoO/model.json', carregarmodelo )
function carregarmodelo (){
console.log ('funcionou')
}
function falarpv(){
    var syten = window.speechSynthesis
    var previsao11 = 'O PRIMEIRAO GESTO É' + previsao
    var previsao22 = 'O SEGUNDO GESTO É' + previsao2
    var TEXTO = new SpeechSynthesisUtterance (previsao11 + previsao22)
    syten.speak(TEXTO)
}

function checar (){
    var img = document.getElementById('foto')
classificaçao.classify(img,pegaresultado)
}
function pegaresultado(error,results){
if (error) {
    console.log(error)
} else {
    console.log(results)
    previsao = results[0].label
    previsao2 = results [1].label
    document.getElementById('resultado1').innerHTML = previsao
    document.getElementById('resultado2').innerHTML = previsao2
    falarpv()
    if(previsao == 'calmo') {
        document.getElementById('emoji1').innerHTML = '&#9994;'
    }
    if(previsao == 'tranquilo') {
        document.getElementById('emoji1').innerHTML = ' &#9996'
    }
    if(previsao == 'relaxado') {
        document.getElementById('emoji1').innerHTML = '&#129305'
    }
    
    
    if(previsao2 == 'calmo') {
        document.getElementById('emoji2').innerHTML = '&#9994;'
    }
    if(previsao2 == 'tranquilo') {
        document.getElementById('emoji2').innerHTML = ' &#9996'
    }
    if(previsao2 == 'relaxado') {
        document.getElementById('emoji2').innerHTML = '&#129305'
    }
}

}












