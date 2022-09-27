import './UserCard.scss';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserCard = ({ id, name, email }) => {
  return (
    <div className='user-card'>
      <div className='user-card__left'>
        <h3>{name}</h3>
        <span>{email}</span>
      </div>
      <div className='user-card__right'>
        <Link to={`/redux-add-user/edit-user/${id}`}>
          <button>
            <FaEdit className='btn-icon' />
          </button>
        </Link>

        <Link>
          <button>
            <FaTrashAlt className='btn-icon' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
