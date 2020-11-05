import './App.css';

const compromissos = [
  'supermercado',
  'acadimia',
  'clube'
]

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return compromissos.map((value) => task(value))
}

export default App;
