import './AddUser.scss';
import AddUserForm from '../AddUserForm/AddUserForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/userSlice';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    setValues({ name: '', email: '' });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate('/redux-add-user');
  };

  return (
    <section className='section__add-user'>
      <AddUserForm
        values={values}
        setValues={setValues}
        handleAddUser={handleAddUser}
        btnText='Add User'
      />
    </section>
  );
};

export default AddUser;
