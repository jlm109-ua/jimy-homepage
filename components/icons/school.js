import React from 'react';

const SchoolIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-book"
    {...props}
  >
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M4 4h16v13H6.5A2.5 2.5 0 004 19.5z" />
  </svg>
);

export default SchoolIcon;
