import React from "react";

const UserDetails = ({ user }) => {
  const personalDetails = [
    {
      label: "Username",
      key: "username",
    },
    {
      label: "e-mail",
      key: "email",
    },
    {
      label: "Phone",
      key: "phone",
    },
    {
      label: "Website",
      key: "website",
    },
  ];

  const companyDetails = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Catchphrase",
      key: "catchPhrase",
    },
    {
      label: "BS",
      key: "bs",
    },
  ];

  return (
    <div className=' lg:border-r border-gray-300 flex flex-col items-center w-full lg:w-1/2'>
      <div className='personalDetails pb-5 border-b border-gray-300'>
        <div className='flex flex-col items-center justify-center'>
          <img
            className='rounded-full mb-3'
            width='200px'
            src={user.profilepicture}
            alt=''
          />
          <h3 className='text-[#545454] font-bold md:text-2xl'>{user.name}</h3>
        </div>
        <div className='details mt-3'>
          {personalDetails.map((detail) => (
            <div className='detail flex items-center' key={detail.key}>
              <span className='mr-2 text-[#9A9A9A] md:text-xl font-medium'>
                {detail.label}:
              </span>
              <span className='font-bold text-[#545454] py-1.5 md:text-xl'>
                {user[detail.key]}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className=' pt-5'>
        <p className='text-[9A9A9A] md:text-xl text-center mb-3'>Company</p>
        <div className=' flex flex-col items-start'>
          {companyDetails.map((detail) => (
            <div className=' flex items-center' key={detail.key}>
              <span className='mr-2 text-[#9A9A9A] md:text-xl font-medium'>
                {detail.label}:
              </span>
              <span className='font-bold text-[#545454] py-1.5 md:text-xl'>
                {user.company?.[detail.key]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
