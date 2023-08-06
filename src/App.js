import Main from './components/Main';
import 'material-symbols'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Main />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
