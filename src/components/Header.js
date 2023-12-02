import React, { useState } from 'react';

const Header = (props) => {
  const [name, setName] = useState('Jack');
  const name1 = 'Tony Stark'; // Not re render on change

  return (
    <div>
      Hello , {name} <span> from {props.country}</span>
      <button
        onClick={() => {
          setName('John');
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default Header;
