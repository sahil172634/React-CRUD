import { useState } from 'react';
import React from 'react';
import Button from '../Ui/Button';
const AddUser = ({ user, onCancle, userArray, setArray }) => {
  const [userInput, setUserInput] = useState({
    id: user ? user.id : '',
    name: user ? user.name : '',
    email: user ? user.email : '',
    mo_Number: user ? user.mo_Number : '',
  });
  const [errorMsg, setErrMsg] = useState({
    errName: false,
    errEmail: false,
    errNumber: false,
  });

  const setUserObject = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: inputIdentifier === 'mo_Number' ? parseInt(newValue) : newValue,
      };
    });
  };

  const formValidation = () => {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(userInput.email);
    if (userInput.name.length <= 0) {
      errorMsg.errName = 'Please enter Name';
    } else {
      errorMsg.errName = false;
    }
    if (!result) {
      errorMsg.errEmail = 'Please enter Valid Email';
    } else {
      errorMsg.errEmail = false;
    }
    if (userInput.mo_Number < 0 || userInput.mo_Number.toString().length !== 10) {
      errorMsg.errNumber = 'Please enter Valid number';
    } else {
      errorMsg.errNumber = false;
    }
    setErrMsg({ ...errorMsg });
    let valuesOfObject = Object.values(errorMsg);
    let checkValue;
    for (let value of valuesOfObject) {
      if (typeof value === 'string') {
        checkValue = false;
        break;
      } else {
        checkValue = true;
      }
    }
    if (checkValue) {
      return true;
    } else {
      return false;
    }
  };

  const addUSerToArray = (event) => {
    event.preventDefault();
    userInput.id ? userInput.id : (userInput.id = userArray[userArray.length - 1].id + 1);
    formValidation() && setArray(userInput);
  };

  return (
    <form className='max-w-sm mx-auto w-[50%]  bg-white shadow-2xl left-0 right-0  border rounded-md p-10 absolute'>
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
          onChange={(event) => setUserObject('name', event.target.value)}
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
          onChange={(event) => setUserObject('email', event.target.value)}
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
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
          onChange={(event) => setUserObject('mo_Number', event.target.value)}
        />
        {errorMsg.errNumber && <p className='text-red-700'>{errorMsg.errNumber}</p>}
      </div>
      <div className='flex justify-center gap-2 '>
        <Button bgColor='bg-at-white-400  ' content='Save' onClick={addUSerToArray} />
        <Button bgColor='bg-at-red-400 text-white' content='Cancel' onClick={() => onCancle(false)} />
      </div>
    </form>
  );
};

export default AddUser;
