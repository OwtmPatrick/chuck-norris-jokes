import { Provider } from 'react-redux';
import './styles/normalize.css';
import { Container } from './components/Container/Container';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
