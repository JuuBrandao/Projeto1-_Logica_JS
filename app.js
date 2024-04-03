alert('Boas Vindas ao Jogo do Número Secreto'); //Mostrar um alerta com a mensagem  "Bem  vindos..."
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // Declare a variável chamada numeroSecreto e atribuir a ele um valor.
console.log(numeroSecreto);
let chute; 
let tentativas = 1;


//enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

// Se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
    alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1) {
    //alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
    //alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
