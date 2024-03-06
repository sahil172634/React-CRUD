import Button from '../../Ui/Button.jsx';
const UserList = ({ users, onUserDelete, onAddEditUser }) => {
  return (
    <>
      <Button content='Add User' bgColor='bg-at-white-400 relative left-96' onClick={() => onAddEditUser(null)} />
      <table className='w-full mt-5 '>
        <thead>
          <tr className='h-14 text-lg'>
            <th>SR_NO</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>MO_NUMBER</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id} className='text-xl p-4 h-16'>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mo_Number}</td>
                <td className='font-medium text-lg'>
                  <Button content='Edit' bgColor='bg-at-white-400 mr-4' onClick={() => onAddEditUser(user)} />
                  <Button content='Delete' bgColor='bg-at-red-400 text-white' onClick={() => onUserDelete(user)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
