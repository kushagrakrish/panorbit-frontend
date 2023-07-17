import React from "react";
import GoogleMaps from "./GoogleMaps";

const UserAddress = ({ user }) => {
  const addressDetails = [
    {
      label: "Street",
      key: "street",
    },
    {
      label: "Suite",
      key: "suite",
    },
    {
      label: "City",
      key: "city",
    },
    {
      label: "Zipcode",
      key: "zipcode",
    },
  ];

  return (
    <div className=' w-full pl-0 lg:pl-10 lg:w-1/2'>
      <p className='text-[9A9A9A] md:text-xl mb-3'>Address</p>
      <div className='details'>
        {addressDetails.map((detail) => (
          <div className='flex items-center' key={detail.key}>
            <span className='mr-2 text-[#9A9A9A] md:text-xl font-medium'>
              {detail.label}:
            </span>
            <span className='font-bold text-[#545454] py-1.5 md:text-xl'>
              {user.address?.[detail.key]}
            </span>
          </div>
        ))}
        <div>
          <GoogleMaps user={user} />
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
