import UserCard from '../../components/UserCard/UserCard';

const UsersList = () => {
  const users = [
    { id: 1, name: 'Luna', email: 'meowsalot@gmail.com' },
    { id: 2, name: 'Rex', email: 'dino@gmail.com' },
  ];

  // const renderCard = () => <div>Users Here</div>;

  if (!users.length) {
    return <p>No User</p>;
  }

  return (
    <div className='user-list'>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UsersList;
