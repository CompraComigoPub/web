import * as React from "react";

function SvgExplore(props) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <rect
        x={1}
        y={1}
        width={5.273}
        height={5.273}
        rx={1}
        stroke="#FFFFFF"
        strokeWidth={2}
      />
      <rect
        x={9.727}
        y={1}
        width={5.273}
        height={5.273}
        rx={1}
        stroke="#FFFFFF"
        strokeWidth={2}
      />
      <rect
        x={1}
        y={9.727}
        width={5.273}
        height={5.273}
        rx={1}
        stroke="#FFFFFF"
        strokeWidth={2}
      />
      <rect
        x={9.727}
        y={9.727}
        width={5.273}
        height={5.273}
        rx={1}
        stroke="#FFFFFF"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgExplore;
