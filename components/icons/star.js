import React from 'react';

const StarIcon = (props) => (
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
    className="feather feather-star"
    {...props}
  >
    <path d="M12 2l2.928 5.856 6.572.96-4.784 4.672 1.128 6.576-5.844-3.072-5.844 3.072 1.128-6.576-4.784-4.672 6.572-.96z" />
  </svg>
);

export default StarIcon
