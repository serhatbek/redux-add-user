import './App.scss';
import { Routes, Route } from 'react-router-dom';
import UsersList from './components/UserList/UsersList';
import AddUser from './components/AddUser/AddUser';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/redux-add-user/' element={<UsersList />} />
        <Route path='/redux-add-user/add-user' element={<AddUser />} />
      </Routes>
    </main>
  );
}

export default App;
