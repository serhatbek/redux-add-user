import './AddUserForm.scss';
import Input from '../Input/Input';

const AddUserForm = () => {
  return (
    <div className='add-user'>
      <Input
        label='Name'
        inputProps={{ type: 'text', placeholder: 'Luna Meowsalot' }}
      />
    </div>
  );
};

export default AddUserForm;
