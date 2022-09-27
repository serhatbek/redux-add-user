import './AddUserForm.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUserForm = () => {
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
    <div className='add-user'>
      <Input
        label='Name'
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Luna Meowsalot' }}
      />
      <Input
        label='Email'
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'meowsalot@gmail.com' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUserForm;
