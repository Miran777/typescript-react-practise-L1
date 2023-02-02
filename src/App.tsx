import { Route, Routes } from 'react-router-dom';
import { UserPage } from './Components/UserPage';
import { TodosPage } from './Components/TodosPage';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <Link to='/users'>Users</Link>
        <br />
      <Link to='/todos'>Todos</Link>
      <Routes>
          <Route path='/users'  element={<UserPage />}/>
          <Route path='/todos'  element={<TodosPage />}/>
      </Routes>
    </>

  );
}

export default App;
