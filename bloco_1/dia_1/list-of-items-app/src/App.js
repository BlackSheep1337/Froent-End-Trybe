import './App.css';

const task = (arr) => {
  return arr.map((item) => <li>{item}</li>);
}

const arr = ['Programar', 'Limpar a casa', 'Comer', 'Repeat!'];

function App() {
  return (
    <>
      <ol> { task(arr) } </ol>
    </>
  );
}

export default App;
