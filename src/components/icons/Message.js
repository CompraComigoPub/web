import * as React from "react";

function SvgMessage(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M16.8 0H7.2C3.23 0 0 3.23 0 7.2v15.6A1.2 1.2 0 001.2 24h15.6c3.97 0 7.2-3.23 7.2-7.2V7.2C24 3.23 20.77 0 16.8 0zm4.8 16.8c0 2.647-2.153 4.8-4.8 4.8H2.4V7.2c0-2.647 2.153-4.8 4.8-4.8h9.6c2.647 0 4.8 2.153 4.8 4.8v9.6z"
        fill="#fff"
      />
      <path d="M6 8.4h12v2.4H6V8.4zm0 4.8h8.4v2.4H6v-2.4z" fill="#fff" />
    </svg>
  );
}

export default SvgMessage;
