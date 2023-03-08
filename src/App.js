import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';


function App() {
  return (
    <div className="App">
       <Header/>
       <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;
