import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div className='userDetails lg:border-r border-gray-300 flex flex-col items-center justify-between w-full lg:w-1/2'>
      <div className='personalDetails pb-5 border-b border-gray-300'>
        <img
          className='rounded-full mb-3'
          width='200px'
          src={user.profilepicture}
          alt=''
        />
        <h3 className='text-gray-700'>{user.name}</h3>
        <div className='details mt-3'>
          <div className='detail flex items-center'>
            <span className='label w-20 text-right mr-2 text-gray-500'>
              Username :
            </span>
            <span className='value font-bold'>{user.username}</span>
          </div>
          <div className='detail flex items-center'>
            <span className='label w-20 text-right mr-2 text-gray-500'>
              e-mail :
            </span>
            <span className='value font-bold'>{user.email}</span>
          </div>
          <div className='detail flex items-center'>
            <span className='label w-20 text-right mr-2 text-gray-500'>
              Phone :
            </span>
            <span className='value font-bold'>{user.phone}</span>
          </div>
          <div className='detail flex items-center'>
            <span className='label w-20 text-right mr-2 text-gray-500'>
              website :
            </span>
            <span className='value font-bold'>{user.website}</span>
          </div>
        </div>
      </div>
      <div className='companyDetails pt-5'>
        <p className='text-gray-500 mb-3'>Company</p>
        <div className='details'>
          <div className='detail flex items-center'>
            <span className='label w-20 text-right mr-2 text-gray-500'>
              Name :
            </span>
            <span className='value font-bold'>{user.company?.name}</span>
          </div>
          <div className='detail flex items-center'>
            <span className='label w-20 text-right mr-2 text-gray-500'>
              catchphrase :
            </span>
            <span className='value font-bold'>{user.company?.catchPhrase}</span>
          </div>
          <div className='detail flex items-center'>
            <span className='label w-20 text-right mr-2 text-gray-500'>
              bs :
            </span>
            <span className='value font-bold'>{user.company?.bs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
