
function calcularIdade() {
    var hoje = new Date()

    let result = document.getElementById("resultado").innerHTML

    let dia = document.getElementById("dia").value
    let mes = document.getElementById("mes").value
    let ano = document.getElementById("ano").value

    if (dia <= 0 || dia > 31 || ano <= 0) {
        alert("Digite uma data de nascimento válida")
        return
    }

    let nascimento = new Date(ano + "/" + mes + "/" + dia);

    var idade = hoje.getFullYear() - nascimento.getFullYear()

    let dth = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
    let dth2 = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())

    if (dth < dth2) {
        idade--;
    }
    result = "A sua idade é " + idade

}

