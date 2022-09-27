import './AddUser.scss';
import AddUserForm from '../AddUserForm/AddUserForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({ name: '', email: '' });
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
