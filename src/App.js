import './App.scss';
import { Routes, Route } from 'react-router-dom';
import UsersList from './components/UserList/UsersList';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';

function App() {
  return (
    <main>
      <div className='container'>
        <Routes>
          <Route path='/redux-add-user' element={<UsersList />} />
          <Route path='/redux-add-user/add-user' element={<AddUser />} />
          <Route path='/redux-add-user/edit-user/:id' element={<EditUser />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
