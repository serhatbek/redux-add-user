import './Input.scss';

const Input = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='input'>
      <label>{label}</label>
      <input {...inputProps} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
