import './App.css';
import Routing from './routing/Routing.jsx';
import { Provider } from "react-redux"
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}

export default App;
