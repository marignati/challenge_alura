

function criptografar() {
    var input = document.getElementById("caixa_texto");
    var inputContent = input.value;
    var i = 0;
    var finalString = "";
    while(i < inputContent.length) {
        var char = inputContent[i];
        if(char == 'e') {
            finalString += "enter";
        } else if(char == "i") {
            finalString += "imes";
        } else if(char == "a") {
            finalString += "ai";
        } else if(char == "o") {
            finalString += "ober";
        } else if(char == "u") {
            finalString = "ufat";
        } else {
            finalString += char;
        }
        i++;
    }

    var paragrafoResult = document.getElementById("resultado");
    paragrafoResult.innerHTML = finalString;
}

function descriptografar() {
    var input = document.getElementById("caixa_texto");
    var inputContent = input.value;
    
    inputContent = inputContent.replaceAll("enter", "e");
    inputContent = inputContent.replaceAll("imes", "i");
    inputContent = inputContent.replaceAll("ai", "a");
    inputContent = inputContent.replaceAll("ober", "o");
    inputContent = inputContent.replaceAll("ufat", "u");

    var paragrafoResult = document.getElementById("resultado");
    paragrafoResult.innerHTML = inputContent;
}
