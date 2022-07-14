th = "";
let timerAtivo = true
let resetValor = document.getElementById('reiniciaTimer')
let s = 0
let m = 0
let h = 0
//botao variaveis do iniciar
let ativado = true
const inicio = document.getElementById('iniciar')
//fim do botao de iniciar


//INICIO INTERAÇÕES




inicio.addEventListener('click', evt => {


if (timerAtivo == true) {
  th = setInterval(() => {
    timerS()
    s += 1
    document.getElementById('s').innerText = s
    document.getElementById('h').innerText = h
  }, 1000)
} else {
  clearInterval(th)
}

ativado = !ativado

  if (ativado) {
    inicio.style.backgroundColor = ('cornflowerblue')
    document.getElementById("iniciar").innerText = "Iniciar"
    document.getElementById("reiniciaTimer").innerText = "Restaurar"
    timerAtivo = !timerAtivo
    console.log(timerAtivo)





  } else {
    inicio.style.backgroundColor = ('red')
    document.getElementById("iniciar").innerText = "Parar"
    document.getElementById("reiniciaTimer").innerText = "Restaurar"
    timerAtivo = false
    console.log(timerAtivo)

  }
})

resetValor.addEventListener('click', evt => {
  resetFunc()
})
//FIM INTERAÇÕES
//FUNCTIONS

function timerS() {
  if (s == 60) {
    s = 0
    m += 1
    document.getElementById('m').innerText = m
  } else if (m == 60) {
    m = 0
    h += 1
  }
}

function resetFunc() {
  s = 0
  n = 0
  h = 0
}


//FIM FUNCTIONS
