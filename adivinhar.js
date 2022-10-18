let numGerado = gerarNumero();
//console.log(numGerado);
 
function principal() {
    let input = document.getElementById("num");
    let palpite = +input.value;
    if (palpite != '') {
        let compara = comparar(palpite, numGerado);
        let msg = document.getElementById("msg");
 
        if (compara == -1) {
            msg.innerHTML = "Tente um número maior!";
        } else if (compara == 1) {
            msg.innerHTML = "Tente um número menor!";
        } else if (compara == 0) {
            msg.innerHTML = "Parabéns, você acertou! Aperte F5 para jogar novamente!";
        }
    }else {
        msg.innerHTML = "Por Favor, digite um número.";
    }
 
}
 
function comparar (palpite, gerado) {
    if (palpite < gerado) {
        return -1;
    } else if (palpite > gerado) {
        return 1;
    }else if (palpite == gerado) {
        return 0;
    }
}
 
function gerarNumero () {
    let gerado = Math.ceil(Math.random() * 20);
    return gerado;
}
