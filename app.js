var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');
var serverURL = 'https://api.funtranslations.com/translate/valspeak.json';

function getTranslationURL(input) {
    return serverURL + '?' + 'texts= ' + input
}

function errorHandler(error) {
    console.log("error occured ", error);
    alert("server is taking time please try after some time!!!")
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.inputText = translatedText;
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);