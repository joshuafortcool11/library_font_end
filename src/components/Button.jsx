import React from 'react';

export default function Button({ buttonlabel, action, className = '', disabled = false }) {
  return (
    <div>
      <button type="button" className={className} onClick={action} disabled={disabled}>
        {buttonlabel}
      </button>
    </div>
  );
}
