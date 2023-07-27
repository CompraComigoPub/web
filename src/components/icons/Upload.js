import * as React from "react";

function SvgUpload(props) {
  return (
    <svg width={80} height={64} fill="none" {...props}>
      <path
        d="M66.654 21.073C62.957 6.343 48.02-2.599 33.29 1.098a27.497 27.497 0 00-20.73 24.675C4.387 27.12-1.146 34.837.202 43.01A14.998 14.998 0 0015.06 55.57H27.56v-5H15.06c-5.522 0-9.999-4.476-9.999-9.998 0-5.522 4.477-10 10-10a2.5 2.5 0 002.499-2.499c-.013-12.425 10.05-22.507 22.475-22.52 10.756-.01 20.014 7.593 22.095 18.146a2.5 2.5 0 002.125 2c6.834.973 11.585 7.301 10.612 14.135A12.499 12.499 0 0162.555 50.57h-9.999v5h9.999c9.664-.03 17.474-7.888 17.445-17.552a17.498 17.498 0 00-13.346-16.945z"
        fill="#6432C2"
      />
      <path
        d="M38.282 31.297l-9.998 9.999 3.524 3.524 5.75-5.724v23.972h4.999V39.096l5.724 5.724 3.525-3.524-9.999-10a2.5 2.5 0 00-3.525 0z"
        fill="#6432C2"
      />
    </svg>
  );
}

export default SvgUpload;
