import React from 'react';

const WorkIcon = (props) => (
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
    className="feather feather-briefcase"
    {...props}
  >
    <path d="M4 7h16v13H4z" />
    <path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3" />
  </svg>
);

export default WorkIcon;
