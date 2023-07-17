import React from "react";

const UserAddress = ({ user }) => {
  return (
    <div className='userAddress w-full pl-0 lg:pl-10 lg:w-1/2'>
      <p className='text-gray-500 mb-3'>Address</p>
      <div className='details'>
        <div className='detail flex items-center'>
          <span className='label w-20 text-right mr-2 text-gray-500'>
            Street :
          </span>
          <span className='value font-bold'>{user.address?.street}</span>
        </div>
        <div className='detail flex items-center'>
          <span className='label w-20 text-right mr-2 text-gray-500'>
            Suite :
          </span>
          <span className='value font-bold'>{user.address?.suite}</span>
        </div>
        <div className='detail flex items-center'>
          <span className='label w-20 text-right mr-2 text-gray-500'>
            City :
          </span>
          <span className='value font-bold'>{user.address?.city}</span>
        </div>
        <div className='detail flex items-center'>
          <span className='label w-20 text-right mr-2 text-gray-500'>
            Zipcode :
          </span>
          <span className='value font-bold'>{user.address?.zipcode}</span>
        </div>
        <div className='map mt-5 rounded-lg overflow-hidden'>
          <iframe
            title='map'
            width='100%'
            height='400px'
            src={`https://maps.google.com/maps?q=${user?.address?.geo?.lat},${user.address?.geo?.long}&hl=es;&output=embed`}
          ></iframe>
          <div className='latLongDetails flex justify-end p-2'>
            <p>
              <span>Lat : </span>
              {user.address?.geo.lat} <span>Long : </span>
              {user.address?.geo.lng}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
