import React from 'react';
import spinner from './spinner.gif';

const Loader = () => {
  return (
    <div>
      <img
        src={spinner}
        alt='Loading'
        style={{
          width: '400px',
          height: '300px',
          margin: 'auto',
          display: 'block',
        }}
      />
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Loader;
