import './UserCard.scss';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const UserCard = ({ name, email }) => {
  return (
    <div className='user-card'>
      <div className='user-card__left'>
        <h3>{name}</h3>
        <span>{email}</span>
      </div>
      <div className='user-card__right'>
        <button>
          <FaEdit className='btn-icon' />
        </button>
        <button>
          <FaTrashAlt className='btn-icon' />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
