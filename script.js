
const res = document.querySelector('.res');
const usuPont = document.querySelector('#Usu-pontuacao');
const maqPont = document.querySelector('#Maq-pontuacao');

let usuPontNumber = 0;
let maqPontNumber = 0;

//função q permite o usuário jogue com suas escolhas
const jogarUsuario = (usuEscolhe) => {
//Chama a função jogar com as escolhas do usuário e da máquina
  jogar(usuEscolhe, maqEscolhe());
};

//Escolha da máquina
const maqEscolhe = () => {
  const escolha = ['pedra', 'papel', 'tesoura'];
  const numAleatorio = Math.floor(Math.random() * 3);
  return escolha[numAleatorio];
};

//atualiza o resultado e a pontuação
const jogar = (usuario, maquina) => {
  console.log('Usuario: ' + usuario + ' Maquina: ' + maquina);

  if (usuario === maquina) {
    res.innerHTML = "EMPATE";
  } else if (
    (usuario === 'papel' && maquina === 'pedra') ||
    (usuario === 'pedra' && maquina === 'tesoura') ||
    (usuario === 'tesoura' && maquina === 'papel')
  ) {
    usuPontNumber++;
    usuPont.innerHTML = usuPontNumber;
    res.innerHTML = 'Você ganhou';
  } else {
    maqPontNumber++;
    maqPont.innerHTML = maqPontNumber;
    res.innerHTML = 'Você perdeu';
  }
};
