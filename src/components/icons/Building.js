import * as React from "react";

function SvgBuilding(props) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M8 0l6.52 5.683v17.093H16V24H0v-1.224h1.48V5.683L8 0zM2.64 19.013l4.816-1.66v-2.577l-4.817 1.66v2.577zm5.904-1.66l4.817 1.66v-2.576l-4.817-1.661v2.576zm4.817 2.867l-4.817-1.661v4.217h4.817V20.22zm-5.905-1.661l-4.817 1.66v2.557h4.817V18.56zM2.64 15.23l4.817-1.66v-2.577l-4.817 1.66v2.577zm5.905-1.66l4.817 1.66v-2.576l-4.817-1.661v2.576zM2.64 11.447l4.817-1.66V7.21L2.64 8.87v2.577zm5.905-1.66l4.817 1.66V8.871L8.544 7.21v2.576zM2.64 7.664l4.817-1.66V2.056L2.64 6.255v1.41zm5.905-1.66l4.817 1.66V6.255L8.544 2.056v3.948z"
        fill="#6432C2"
      />
    </svg>
  );
}

export default SvgBuilding;