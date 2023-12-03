import React, { useState } from 'react';

const Header = (props) => {
  const [name, setName] = useState('Jack');
  const name1 = 'Tony Stark'; // Not re render on change

  return (
    <div className="text-teal-600">
      Hello , {name} <span> from {props.country}</span>
      <button
        onClick={() => {
          setName('John');
        }}
      >
        Change Name
      </button>
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...yes done</button>

    </div>
  );
};

export default Header;
