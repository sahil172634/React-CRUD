import React from 'react';
import Button from '../Ui/Button';

const DeleteModel = ({ userName, onCancle, deletUser }) => {
  return (
    <div className='max-w-md mx-auto  bg-white shadow-2xl left-0 right-0  border rounded-md p-10 absolute'>
      <p className='text-lg'>
        Are you sure you want to delete <strong>{userName}</strong>{' '}
      </p>
      <div className='mt-10 flex gap-2 justify-center'>
        <Button content='Cancel' bgColor='bg-at-white-400 ' onClick={() => onCancle(false)} />
        <Button content='Delete' bgColor='bg-at-red-400 text-white' onClick={deletUser} />
      </div>
    </div>
  );
};

export default DeleteModel;
