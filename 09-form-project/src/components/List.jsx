const List = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.email}
        >{`${user.name} ${user.surname}, ${user.email}`}</li>
      ))}
    </ul>
  );
};

export default List;
