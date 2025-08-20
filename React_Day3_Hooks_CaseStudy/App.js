import './App.css';
import UseContextTheme from './components/Tasks/UseContextTheme';
import UseEffectCart from './components/Tasks/UseEffectCart';
import UseStateForm from './components/Tasks/UseStateForm';

function App() {
  return (
    <div className="App">
      
      <h1><u>Case Study</u></h1>
      <UseStateForm />
      <hr />
      <UseEffectCart />
      <hr />
      <UseContextTheme />

    </div>
  );
}

export default App;
