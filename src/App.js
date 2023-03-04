import Home from './page/Home';
import './styles/global.scss'

let data = {
  "Primeiro Nome": "João Vitor",
  "Sobrenome": "Alcantara",
  "Apelido": "Jovi",
  "Curso": "Ciência da Computação",
  "Universidade": "Unicamp",
  "Turma": "Pixinguinha",
  "Periodo": "Tarde",
  "Status": "Estudante",
  "Area": "Exatas",
  "Idade": "22",
  "URLFoto": "https://pps.whatsapp.net/v/t61.24694-24/323807984_895529844989283_6961357159995897617_n.jpg?ccb=11-4&oh=01_AdQvMPU3NmNzMYzzPP9mu5jS70t0GVq4mT9YXa6jnEx7Bw&oe=6410A08D",
  
}

function App() {
  return (
    <div className="container">
      <Home type="student" data={data}/>
    </div>
  );
}

export default App;
