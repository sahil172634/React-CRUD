import { useState } from 'react';
import React from 'react';
import { users } from '../Data.js';
import AddUser from './AddUser.jsx';
import DeleteModel from './DeleteModel.jsx';
import Button from '../Ui/Button.jsx';
const ShowUsers = () => {
  const [addUSerForm, setAddUSerForm] = useState(false);
  const [userArray, setUserArray] = useState(users);
  const [selUser, setSelUser] = useState('');
  const [delUser, setDelUser] = useState('');

  const showNewUSerArray = (AddedUser) => {
    let indexOfObj = userArray.findIndex((obj) => obj.id === AddedUser.id);
    setUserArray((prevArray) => {
      const newArray = [...prevArray];
      if (indexOfObj === -1) {
        newArray.push(AddedUser);
      } else {
        newArray[indexOfObj] = AddedUser;
      }
      return newArray;
    });
    allPopupShowHideHandler(false);
  };

  const allPopupShowHideHandler = (Identifier) => {
    setAddUSerForm(Identifier);
    if (Identifier === 'Add') {
      setSelUser(null);
    }
  };
  const deleteUser = () => {
    const updatedList = userArray.filter((name) => name.id !== delUser.id);
    setUserArray(updatedList);
    setAddUSerForm(null);
  };
  const delUserPopupHandler = (user) => {
    setDelUser(user);
    setAddUSerForm('Delete');
  };
  const editUserPopupHandler = (user) => {
    setSelUser(user);
    setAddUSerForm('Edit');
  };

  return (
    <>
      <Button
        content='Add USer'
        bgColor='relative left-450px bg-at-white-400 '
        onClick={() => allPopupShowHideHandler('Add')}
      />
      {(addUSerForm == 'Add' || addUSerForm == 'Edit') && (
        <AddUser user={selUser} onCancle={allPopupShowHideHandler} userArray={userArray} setArray={showNewUSerArray} />
      )}
      {addUSerForm == 'Delete' && (
        <DeleteModel userName={delUser.name} deletUser={deleteUser} onCancle={allPopupShowHideHandler} />
      )}
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
          {userArray.map((user, index) => {
            return (
              <tr key={user.id} className='text-xl p-4 h-16'>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mo_Number}</td>
                <td className='flex justify-center gap-3 font-medium text-lg'>
                  <Button content='Edit' bgColor='bg-at-white-400' onClick={() => editUserPopupHandler(user)} />
                  <Button
                    content='Delete'
                    bgColor='bg-at-red-400 text-white'
                    onClick={() => delUserPopupHandler(user)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ShowUsers;
