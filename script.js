let students = [
    {
        "name": "Antônia",
        "firstAverage": 6.5,
        "secondAverage": 8.3
    },
    {
        "name": "José",
        "firstAverage": 4.5,
        "secondAverage": 3.3
    },
    {
        "name": "Marcos",
        "firstAverage": 9.5,
        "secondAverage": 8.7
    },
    {
        "name": "Miguelina",
        "firstAverage": 3.5,
        "secondAverage": 7.0
    },
    {
        "name": "Arthur",
        "firstAverage": 6.5,
        "secondAverage": 2.2
    },
]

function finalAverage(firstAverage, secondAverage) {
    let result = (firstAverage + secondAverage) / 2
    return result
}

for (let student of students) {
    let result = finalAverage(student.firstAverage, student.secondAverage)
    let approved = result > 6 ? "Parabéns, " + student.name + "! Você foi aprovado(a) no concurso!" : "Não foi dessa vez, " + student.name + ". Tente novamente!"
    alert(`A média do(a) aluno(a) ${student.name} é: ${result.toFixed(1)}\n${approved}`)
}