import './AddUserForm.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

const AddUserForm = ({ btnText, handleAddUser, values, setValues }) => {
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
      <Button onClick={handleAddUser}>{btnText}</Button>
    </div>
  );
};

export default AddUserForm;
