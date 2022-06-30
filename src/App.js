import React, { useState, useRef, useLayoutEffect } from 'react';
import Calendar from './Calendar';

export default function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        className="m-10"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Calendar />
    </>
  );
}
