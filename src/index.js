import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from './page/Login';
import Login from './page/Login'

import Overview from './page/Overview';
import Quizz from './page/Quizz';
import Conteudo from './page/Conteudo';

import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Disciplina from './page/Disciplina';

const firebaseConfig = {
  apiKey: "AIzaSyDZc7R_-lLK9xKfa4_610JI7Izk4b831Xc",
  authDomain: "crudherbert.firebaseapp.com",
  databaseURL: "https://crudherbert-default-rtdb.firebaseio.com",
  projectId: "crudherbert",
  storageBucket: "crudherbert.appspot.com",
  messagingSenderId: "382234945560",
  appId: "1:382234945560:web:e0e3b7df6c372bc513fb6d",
  measurementId: "G-RBB092Q5HF"
};

firebase.initializeApp(firebaseConfig);

//    <Overview page="Home" base={firebase}/>

let data = {
  "ID": "HS230001",
  "Primeiro Nome": "João Vitor",
  "Email": "jv86679@gmail.com",
  "Sobrenome": "Alcantara",
  "Apelido": "Jovi",
  "Nivel": "Estudante",
  "Curso": "Ciência da Computação",
  "Universidade": "Unicamp",
  "Turma": "Pixinguinha",
  "Periodo": "Tarde",
  "Status": "Estudante",
  "Area": "Exatas",
  "Idade": "22",
  "Senha": "23072042888",
  "RG": "1122233344",
  "Nascimento": "2000-08-31",
  "Curso": "Vestibular",
  "CEP": "13060492",
  "Celular": "19995397660",
  "URLFoto": "https://pps.whatsapp.net/v/t61.24694-24/323807984_895529844989283_6961357159995897617_n.jpg?ccb=11-4&oh=01_AdQvMPU3NmNzMYzzPP9mu5jS70t0GVq4mT9YXa6jnEx7Bw&oe=6410A08D",
  "Interesses": {
    "Exatas": 84,
    "Humanidades": 72,
    "Natureza": 78,
    "Linguagens": 42,
    "Tecnologia": 91,
    "Ciência": 88,
    "Arte": 74,
  },
  "Desempenho": {
    "Biologia": {
      "Nivel": 0,
      "Nome": "Biologia",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "Filosofia": {
      "Nivel": 0,
      "Nome": "Filosofia",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "Fisica": {
      "Nivel": 0,
      "Nome": "Fisica",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "Geografia": {
      "Nivel": 0,
      "Nome": "Geografia",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "Geral": {
      "Nivel": 0,
      "Nome": "Geral",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "História": {
      "Nivel": 0,
      "Nome": "História",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "Literatura": {
      "Nivel": 0,
      "Nome": "Literatura",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "Matematica": {
      "Nivel": 0,
      "Nome": "Matematica",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "Português": {
      "Nivel": 0,
      "Nome": "Português",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "Quimica": {
      "Nivel": 0,
      "Nome": "Quimica",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    },
    "Sociologia": {
      "Nivel": 0,
      "Nome": "Sociologia",
      "Nota": 0,
      "Nota_herbert": 0,
      "Nota_simulado": 0
    }
  },
}
 
let data2 = {
  "Nome": "Matemática",
  "Conteudos": {
      "Álgebra": ["Equação de 1º Grau", "Equação de 2º Grau", "Funções de 1º Grau", "Funções de 2º Grau", "P.A e P.G", "Sistemas de Equações", "Gráficos e Funções", "Equações Irracionais", "Matemática Financeira", "Binômio de Newton", "Inequações de 1º Grau", "Inequações de 2º Grau", "Funções Polinomiais", "Matrizes", "Determinantes"],
      "Geometria": ["Grandezas", "Ângulos", "Triângulos", "Quadriláteros Notaveis", "Polígonos Regulares", "Circulos", "Teorema de Tales", "Congruência e Semelhança de Triângulos", "Poliedros", "Prismas", "Pirâmides", "Cilindros", "Cones", "Esferas", "Simetrias"],
      "Estatística": ["Análise Combinatória", "Noções de Probabilidade", "Representação", "Medidas"],
      "Matemática Básica": ["Conjuntos Numéricos", "Frações", "Expressões Numéricas", "Notação Científica", "Teoria dos Conjuntos", "Potenciação e Radiciação", "Intervalos Reais", "Regra de Três", "Operações Básicas", "Expressões Algébricas"],
  }
}

let data3 = {
  "Materia": "Matemática",
  "Nome": "Equação do 1º Grau",
  "Material": [{"Nome": "Introdução a Equação de 1º Grau", "Link": "https://drive.google.com/file/d/1yHojMK9VH3qoNP6aZ15X8Q5j1OUwIDO1/view?usp=share_link"},
               {"Nome": "Equações de 1º Grau - Regras", "Link": "https://drive.google.com/file/d/13CRTTCpjc9VUcyyoNfT6BL8zC0tWbn45/view?usp=share_link"}],
  "Exercicios": [
    {"Enunciado": "Qual é a solução da equação 3x + 4 = 10?", "Alternativas": ["a) x = 2", "b) x = 3", "c) x = 4", "d) x = 5"], "Gabarito": "a) x = 2"},
    {"Enunciado": "Qual é a solução da equação 2x + 5 = 3x - 1?", "Alternativas": ["a) x = 6", "b) x = 6", "c) x = -6", "d) x = -7"], "Gabarito": "b) x = 7", "Resolução": "Para resolver a equação 2x + 5 = 3x - 1, precisamos encontrar o valor de x que satisfaz a equação. Para isso, podemos seguir os seguintes passos:\n\n1. Isolar o termo com x em um lado da equação. Podemos fazer isso subtraindo 2x de ambos os lados da equação, o que nos dá:\n\n   2x + 5 - 2x = 3x - 1 - 2x\n\n   Simplificando, temos:\n\n   5 = x - 1\n\n2. Isolar x no lado direito da equação. Podemos fazer isso adicionando 1 a ambos os lados da equação, o que nos dá:\n\n   5 + 1 = x - 1 + 1\n\n   Simplificando, temos:\n\n   6 = x\n\nPortanto, a solução da equação 2x + 5 = 3x - 1 é x = 6. Podemos verificar que isso é verdadeiro substituindo x = 6 na equação original:\n\n   2(6) + 5 = 3(6) - 1\n\n   12 + 5 = 18 - 1\n\n   17 = 17\n\n   Como a igualdade é verdadeira, a solução x = 6 é válida."},
    {"Enunciado": "Uma loja de eletrônicos oferece um desconto de R$ 50,00 em todos os smartphones à venda. Se o preço original de um smartphone é de R$ 900,00, qual é o preço com o desconto?", "Alternativas": ["a) R$ 850,00", "b) R$ 860,00", "c) R$ 870,00", "d) R$ 880,00"], "Gabarito": "a) R$ 850,00"},
    {"Enunciado": "Um pintor cobra R$ 35,00 por hora para pintar paredes. Ele foi contratado para pintar duas paredes de um cômodo, uma medindo 4 metros de largura por 3 metros de altura e outra medindo 3 metros de largura por 3 metros de altura. Se ele leva em média 4 horas para pintar cada parede, qual é o valor total que ele vai cobrar pelo trabalho?", "Alternativas": ["a) R$ 420,00", "b) R$ 440,00", "c) R$ 460,00", "d) R$ 480,00"], "Gabarito": "d) R$ 480,00"},
  ]
}

const data4 = [
  {
    enunciado: 'Qual é a função dos linfócitos T citotóxicos no sistema imunológico?',
    alternativas: ['Produzir anticorpos', 'Fagocitar microrganismos', 'Ativar outras células do sistema imunológico', 'Destruir células infectadas por vírus ou células cancerígenas'],
    gabarito: 'Produzir anticorpos',
  },
  {
    enunciado: 'Qual é o principal mecanismo responsável pela perda de biodiversidade nos ecossistemas naturais?',
    alternativas: ['A destruição de habitats naturais pela expansão urbana e agrícola', 'A introdução de espécies exóticas invasoras', 'A poluição ambiental, em especial por produtos químicos tóxicos', 'A mudança climática global, com alterações nos padrões de temperatura e precipitação'],
    gabarito: 'A destruição de habitats naturais pela expansão urbana e agrícola',
  },
  {
    enunciado: 'Qual é o mecanismo molecular que permite a variação da expressão gênica em resposta a sinais ambientais?',
    alternativas: ['A epistasia', 'A recombinação genética', 'A metilação do DNA', 'A regulação transcricional'],
    gabarito: 'A regulação transcricional.',
  },
];

// <Home type="student" data={data} />
// <Disciplina data={data2} user={data}/>
// <Conteudo data={data3} user={data}/>
// <Quizz user={data} data={data4} name="Biologia"/>

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login base={firebase}/>
  },
  {
    path: "/Home",
    element: <Overview base={firebase} user={data} current="Home"/>
  },
  {
    path: "/Disciplina",
    element: <Disciplina user={data} data={data2} base={firebase} current="Home"/>
  },
  {
    path: "/Quizz",
    element: <Quizz user={data} data={data4} name="Biologia"/>
  },
  {
    path: "/Conteudo",
    element: <Conteudo data={data3} user={data}/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
