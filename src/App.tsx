import { Provider } from 'react-redux';
import './styles/normalize.css';
import { Layout } from './components/layout/Layout';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
