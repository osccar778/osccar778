document.write("vem är han");
let answer = Math.floor(Math.random()*20)+1;
let incorrect = true;



while(incorrect){
    let svar = Number(prompt("gissa ett tal mellan 1 och 20"));

    if(svar>20){
        alert("Mellan 1 och 20 sa jag retard");
    }

    else if (svar>answer){
        alert("för högt retard hahah du är sämst");
    }
    else if (svar<answer){
        alert("du är fan sämst hur kan man vara så retarderad ingen hade brytt sig om du tog livet av dig");
    }
    else if(svar==answer){
        alert("Gunbritt 63 bor inom 200 meter");
        incorrect = false;
    }
    else {
        alert("retard?!?");
    }
}