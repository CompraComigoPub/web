import * as React from "react";

function SvgChat(props) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M11.2 0H4.8A4.805 4.805 0 000 4.8v10.4a.8.8 0 00.8.8h10.4c2.647 0 4.8-2.153 4.8-4.8V4.8C16 2.153 13.847 0 11.2 0zm3.2 11.2c0 1.765-1.435 3.2-3.2 3.2H1.6V4.8c0-1.765 1.435-3.2 3.2-3.2h6.4c1.765 0 3.2 1.435 3.2 3.2v6.4z"
        fill="#87A1FF"
      />
      <path d="M4 5.6h8v1.6H4V5.6zm0 3.2h5.6v1.6H4V8.8z" fill="#87A1FF" />
    </svg>
  );
}

export default SvgChat;
