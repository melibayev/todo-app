import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import TodoRow from './components/TodoRow';

function App() {
  return (
    <Fragment>
      <ToastContainer 
        position="bottom-right"
        autoClose={2000}
      />
      <TodoRow />
    </Fragment>
  );
}

export default App;
