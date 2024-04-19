const User = ({ user }) => {
  console.log("::::::::", user);
  return (
    <div>
      <li> {user.name}</li>
    </div>
  );
};

export default User;
