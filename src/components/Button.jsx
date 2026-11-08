import React from 'react';

export default function Button({ buttonlabel, action }) {
  return (
    <div>
      <button onClick={action}>{buttonlabel}</button>
    </div>
  );
}
