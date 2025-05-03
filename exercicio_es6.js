const alunos = [
    {nome: "Rayssa", nota: 8.5},
    {nome: "Lucas", nota: 5.8},
    {nome: "Ana", nota: 6.5},
    {nome: "Matheus", nota: 4.3},
    {nome: "Allan", nota: 6.7},
    {nome: "Arnor", nota: 10},
    {nome: "Gustavo", nota: 6.6}
];
function filtrarAlunosAprovados(listaDeAlunos){
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
};
const aprovados = filtrarAlunosAprovados(alunos);
console.log(aprovados);