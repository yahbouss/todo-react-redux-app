import { Container } from 'react-bootstrap';
import './App.scss';
import InputBox from './components/InputBox/InputBox.component';
import TodoList from './components/TodoList/TodoList.component';

function App() {
  return (
    <Container className="justify-content-md-center">
      <TodoList/>
      <InputBox/>
    </Container>
    );
}

export default App;
