import './UsersList.scss';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UsersList = () => {
  const users = useSelector((store) => store.users);

  console.log(users);

  if (!users.length) {
    return <p>No User</p>;
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
