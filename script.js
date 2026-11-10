let nivel = ""

function calculo(vitorias, derrotas){
    return vitorias - derrotas
}

let saldoVitorias = calculo(50, 5)

if (saldoVitorias <= 10){
    nivel = "Ferro"
}
else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "Bronze"
}
else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "Prata"
}
else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro"
}
else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"
}
else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Lendário"
}
else {
    nivel = "Imortal"
}

console.log(`O herói tem o saldo de vitórias de ${saldoVitorias} e está no nível ${nivel}`)
