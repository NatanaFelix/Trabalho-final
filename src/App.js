import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Rotas from './Rotas';
import BotaoScroll from './components/BotaoScroll';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        
        <Container>
          <Rotas />
        </Container>
        <BotaoScroll />
      </BrowserRouter>
    </div>
  );
}

export default App;
