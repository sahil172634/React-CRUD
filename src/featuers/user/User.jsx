import { useState } from 'react';

import { userData } from '../../Data';
import UserForm from './UserForm';
import UserList from './UserList';
import DeleteModel from './DeleteUser';
const User = () => {
  const initialObj = { id: 0, name: '', email: '', mo_Number: '' };
  const [isFormShow, setFormShow] = useState(false);
  const [users, setUsers] = useState(userData);
  const [selUser, setSelUser] = useState(initialObj);
  const [delUser, setDelUser] = useState(null);

  const onAddEditUser = (user) => {
    setFormShow(!isFormShow);
    setSelUser(user || initialObj);
  };
  const onCancleUserform = () => {
    //setSelUser({ id: '', name: '', email: '', mo_Number: '' });
    onAddEditUser();
  };
  // const onUserEdit = (user) => {
  //   setSelUser(user);
  //   onAddEditUser();
  // };
  const isUserExist = (user) => {
    let isUserValueExist = {};
    let isCheckEmail = users.some((userObj) => userObj.email === user.email && userObj.id !== user.id);
    let isCheckNumber = users.some((userObj) => userObj.mo_Number === user.mo_Number && userObj.id !== user.id);
    if (isCheckEmail) {
      isUserValueExist.errEmail = 'Email already Exists';
    }
    if (isCheckNumber) {
      isUserValueExist.errNumber = 'Number already Exists';
    }

    return isUserValueExist;
  };

  const onSaveUser = (user) => {
    user.id ? user.id : users.length == 0 ? (user.id = 1) : (user.id = users[users.length - 1].id + 1);
    let indexOfObj = users.findIndex((obj) => obj.id === user.id);
    const newArray = [...users];
    if (indexOfObj === -1) {
      newArray.push(user);
    } else {
      newArray[indexOfObj] = user;
    }
    setUsers(newArray);
    //setSelUser(null);
    onAddEditUser();
  };

  const onDeleteUser = (user) => {
    setDelUser(user);
  };
  const deleteUser = () => {
    const updatedList = users.filter((name) => name.id !== delUser.id);
    setUsers(updatedList);
    resetUserAndCloseModal();
  };
  const resetUserAndCloseModal = () => {
    setDelUser(null);
  };

  return (
    <>
      <UserList users={users} onAddEditUser={onAddEditUser} onUserDelete={onDeleteUser} />
      {isFormShow && (
        <UserForm user={selUser} onCancle={onCancleUserform} onSaveUser={onSaveUser} isUserExist={isUserExist} />
      )}
      {delUser && <DeleteModel userName={delUser.name} deletUser={deleteUser} onCancle={resetUserAndCloseModal} />}
    </>
  );
};

export default User;
