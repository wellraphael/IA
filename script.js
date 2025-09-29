const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
alternativas: [
{
    texto: "Isso é assustador!",
    afirmação: "afirmação",
}
{
    texto:"Isso é maravilhoso!",
    afirmação:"afirmação"
}
    "Alternativa 1",
    "Alternativa 2"
]       
    }, 
     {
enunciado: "Pergunta 2",
alternativas: [
    "Alternativa 1",
    "Alternativa 2"
]       
    },
     {
enunciado: "Pergunta 3",
alternativas: [
    "Alternativa 1",
    "Alternativa 2"
]       
    },
     {
enunciado: "Pergunta 4",
alternativas: [
    "Alternativa 1",
    "Alternativa 2"
]       
    },
     {
enunciado: "Pergunta 5",
alternativas: [
    "Alternativa 1",
    "Alternativa 2"
]       
    }
];
