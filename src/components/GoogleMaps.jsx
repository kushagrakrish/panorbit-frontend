import React from "react";

const GoogleMaps = ({ user }) => {
  return (
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
  );
};

export default GoogleMaps;
