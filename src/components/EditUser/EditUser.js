import './EditUser.scss';
import AddUserForm from '../AddUserForm/AddUserForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EditUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const handleEditUser = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({ name: '', email: '' });
    navigate('/redux-add-user');
  };

  return (
    <section className='edit-user'>
      <AddUserForm
        values={values}
        setValues={setValues}
        handleAddUser={handleEditUser}
        btnText='Add User'
      />
    </section>
  );
};

export default EditUser;
