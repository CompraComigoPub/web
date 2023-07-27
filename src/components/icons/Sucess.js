import * as React from "react";

function SvgSucess(props) {
  return (
    <svg width={40} height={40} fill="none" {...props}>
      <circle cx={20} cy={20} r={20} fill="#E0FFC1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.01 13.172a1.612 1.612 0 012.258-.006 1.595 1.595 0 01.038 2.245l-8.558 10.64a1.606 1.606 0 01-1.149.511 1.614 1.614 0 01-1.167-.468l-5.67-5.642a1.6 1.6 0 01-.395-1.77 1.599 1.599 0 01.889-.883 1.614 1.614 0 011.778.393l4.49 4.463 7.445-9.436a.514.514 0 01.043-.047h-.002z"
        fill="#48BE00"
      />
    </svg>
  );
}

export default SvgSucess;
