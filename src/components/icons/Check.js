import * as React from "react";

function SvgCheck(props) {
  return (
    <svg width={24} height={19} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.242.636A2.211 2.211 0 0123.34.627a2.188 2.188 0 01.052 3.08L11.654 18.298a2.205 2.205 0 01-1.575.7 2.215 2.215 0 01-1.6-.641L.702 10.619A2.193 2.193 0 010 9.055a2.183 2.183 0 01.646-1.59 2.206 2.206 0 011.598-.642 2.215 2.215 0 011.574.698l6.157 6.12L20.187.7a.68.68 0 01.058-.064h-.003z"
        fill="#48BE00"
      />
    </svg>
  );
}

export default SvgCheck;
