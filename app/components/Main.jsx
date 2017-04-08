import React from 'react';

export default function Main(props) {
  return (
    <div>
      <div>
        <h1>Main.jsx rendered</h1>
        {props.children}
      </div>
    </div>
  );
}
