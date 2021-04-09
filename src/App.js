import './App.css';
import Store from './global-state/Store';
import Logo from './components/Logo';

function App() {
  return (
    <Store>
      <Logo/>
    </Store>
  );
}

export default App;
