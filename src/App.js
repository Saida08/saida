import logo from "./logo.svg";
import "./App.css";
import saida from './saida.jpg';

function App() {
  return (
    <div>
      <header>
        <h1>Hello World</h1>
        <p>Name: M.Saida Reddy<br></br>
        Ht.no:2211CS010364,<br></br>
        Group:7A</p>
        <hr></hr>
        <img src={saida} alt="saida" />
        <h2>About Myself</h2>
        <p>I am Saida from group 7A,<br></br>
          I am 18 years old,<br></br>
          I like reading books,playing sports etc...
        </p>
      
      </header>
    </div>
  );
}

export default App;