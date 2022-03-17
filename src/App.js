import './App.css';
import { AppContext } from './contexts/AppContexts';
import { Div } from './components/Div';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
