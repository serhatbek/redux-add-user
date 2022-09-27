import './EditUser.scss';
import AddUserForm from '../AddUserForm/AddUserForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../../features/userSlice';

const EditUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const params = useParams();
  const existingUser = users.filter((user) => user.id == params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: '', email: '' });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate('/redux-add-user');
  };

  return (
    <section className='edit-user'>
      <AddUserForm
        values={values}
        setValues={setValues}
        handleEditUser={handleEditUser}
        btnText='Edit User'
      />
    </section>
  );
};

export default EditUser;
