// Button.js
import React from 'react';

const JoinWaitListButton = ({ onClick, }) => {
  return (
    <button
    data-modal-target="default-modal"
    data-modal-toggle="default-modal"
    className="block text-white bg-customOrange p-2 rounded-3xl focus:ring-4 w-40"
    onClick={onClick}
  >
    Join the Waitlist
  </button>
  );
};

export default JoinWaitListButton;
