import { useState } from 'react';

import Button from '../../Ui/Button';
const UserForm = ({ user, onCancle, onSaveUser, isUserExist }) => {
  const [userInput, setUserInput] = useState(user);
  const [errorMsg, setErrMsg] = useState({});

  const changeUserInput = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: inputIdentifier === 'mo_Number' ? parseInt(newValue) : newValue,
      };
    });
  };

  const isFormValid = () => {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(userInput.email);
    let err = {};
    if (userInput.name.length <= 0) {
      err.errName = 'Please enter Name';
    }
    if (!result) {
      err.errEmail = 'Please enter Valid Email';
    }
    if (userInput.mo_Number < 0 || userInput.mo_Number.toString().length !== 10) {
      err.errNumber = 'Please enter Valid number';
    }
    const isUserValid = isUserExist(userInput);
    // if (Object.keys(isUserValid).length !== 0) {
    //   err = { ...err, ...isUserValid };
    // }
    if (Object.keys(err).length !== 0 || Object.keys(isUserValid).length !== 0) {
      // err = { ...err, ...isUserValid };
      setErrMsg({ ...err, ...isUserValid });
      return false;
    } else {
      return true;
    }
  };

  const addUSer = (event) => {
    event.preventDefault();
    isFormValid() && onSaveUser(userInput);
  };

  return (
    <>
      <div className='w-full h-full opacity-60  bg-black absolute  top-0 left-0 '></div>
      <form className='max-w-sm mx-auto w-[50%]  bg-white shadow-2xl left-0 right-0  border rounded-md p-10 absolute top-24'>
        <div className='mb-5'>
          <label htmlFor='name' className='mb-2 text-sm font-medium text-gray-900'>
            Your Name
          </label>
          <input
            type='text'
            id='name'
            value={userInput.name}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
            placeholder='Enter Your Name'
            onChange={(event) => changeUserInput('name', event.target.value)}
          />
          {errorMsg.errName && <p className='text-red-700'>{errorMsg.errName}</p>}
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='mb-2 text-sm font-medium text-gray-900'>
            Your email
          </label>
          <input
            value={userInput.email}
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
            placeholder='name@gmail.com'
            onChange={(event) => changeUserInput('email', event.target.value)}
          />
          {errorMsg.errEmail && <p className='text-red-700'>{errorMsg.errEmail}</p>}
        </div>
        <div className='mb-5'>
          <label htmlFor='number' className='mb-2 text-sm font-medium text-gray-900'>
            Your Mobile Number
          </label>
          <input
            value={userInput.mo_Number}
            type='number'
            id='number'
            placeholder='Enter Your Number'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
            onChange={(event) => changeUserInput('mo_Number', event.target.value)}
          />
          {errorMsg.errNumber && <p className='text-red-700'>{errorMsg.errNumber}</p>}
        </div>
        <div className='flex justify-center gap-2 '>
          <Button bgColor='bg-at-white-400  ' content='Save' onClick={addUSer} />
          <Button bgColor='bg-at-red-400 text-white' content='Cancel' onClick={onCancle} />
        </div>
      </form>
    </>
  );
};

export default UserForm;
