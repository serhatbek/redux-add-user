import './UserCard.scss';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../features/userSlice';

const UserCard = ({ id, name, email }) => {
  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(deleteUser({ id: id }))}>
            <FaTrashAlt className='btn-icon' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
