import * as React from "react";

function SvgHomeSmall(props) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M15.111 4.813L9.778.61A2.844 2.844 0 008 0c-.656 0-1.289.217-1.778.61L.89 4.813a2.427 2.427 0 00-.66.817A2.192 2.192 0 000 6.62v6.983c0 .636.281 1.245.781 1.695.5.45 1.178.702 1.886.702h10.666c.708 0 1.386-.253 1.886-.702.5-.45.781-1.06.781-1.695V6.61a2.193 2.193 0 00-.23-.984 2.429 2.429 0 00-.659-.814zm-5.333 9.589H6.222v-3.995a.76.76 0 01.26-.565.942.942 0 01.63-.234h1.777c.236 0 .462.084.628.234a.76.76 0 01.26.565v3.995zm4.444-.8a.76.76 0 01-.26.566.942.942 0 01-.629.234h-1.777v-3.995c0-.636-.281-1.246-.781-1.695a2.826 2.826 0 00-1.886-.702H7.11c-.707 0-1.385.252-1.885.702-.5.45-.782 1.059-.782 1.695v3.995H2.667a.942.942 0 01-.629-.234.76.76 0 01-.26-.565V6.61c0-.113.027-.225.08-.329a.811.811 0 01.222-.27l5.333-4.195A.949.949 0 018 1.618c.216 0 .424.07.587.199l5.333 4.195c.095.075.17.167.223.27.052.104.079.216.08.33v6.99z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgHomeSmall;