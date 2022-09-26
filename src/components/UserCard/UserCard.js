import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const UserCard = ({ name, email }) => {
  // const { id, name, email } = user;
  return (
    <div className='user-card'>
      <div>
        <h3>{name}</h3>
        <span>{email}</span>
      </div>
      <div>
        <button>
          <FaEdit />
        </button>
        <button>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
