import React from 'react';
import useCurrentWindow from '../hooks/useCurrentWindow';

const InputBox = () => {
  const windowWidth = useCurrentWindow();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: windowWidth > 480 ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        marginTop: '50px',
      }}>
      <input
        type='text'
        placeholder='you@youremail.com'
        name=' '
        style={{
          padding: '5px',
          width: '300px',
          height: '40px',
          border: '2px solid black',
        }}
      />

      <button
        style={{
          background: 'black',
          color: 'white',
          border: 'none',
          outline: 'inherit',
          height: '40px',
          width: windowWidth > 480 ? 'auto' : '300px',
          padding: '0px 15px',
          textDecoration: 'none',
        }}>
        Sign Me Up
      </button>
    </div>
  );
};

export default InputBox;
