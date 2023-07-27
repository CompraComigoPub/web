import * as React from "react";

function SvgInative(props) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <circle cx={16} cy={16} r={16} fill="#E0E0E0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.808 10.539a1.29 1.29 0 011.806-.005 1.276 1.276 0 01.031 1.796l-6.847 8.512a1.284 1.284 0 01-.919.41 1.293 1.293 0 01-.933-.375l-4.537-4.514a1.28 1.28 0 01-.315-1.415 1.28 1.28 0 01.71-.708 1.294 1.294 0 011.423.314l3.592 3.57 5.957-7.548a.407.407 0 01.034-.037h-.002z"
        fill="#9A9A9A"
      />
    </svg>
  );
}

export default SvgInative;
