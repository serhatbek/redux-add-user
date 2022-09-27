import './UsersList.scss';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UsersList = () => {
  const users = useSelector((store) => store.users);

  if (!users.length) {
    return (
      <section className='user-list'>
        <h1>No user, please enter users</h1>
        <Link to={'add-user'}>
          <Button>Add User</Button>
        </Link>
      </section>
    );
  }

  return (
    <section>
      <div className='user-list'>
        <h1>redux toolkit</h1>
        <Link to={'add-user'}>
          <Button>Add User</Button>
        </Link>
        <div className='box'>
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsersList;
