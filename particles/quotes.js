import React from 'react';

const QuotesIcon = (props) => {
  const computedSize = props.size || '1em';
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={ computedSize }
      width={ computedSize }
      viewBox="0 0 32 32"
      style={ { verticalAlign: 'middle' } }
      { ...props }
    >
      <g>
<path d="M13.31 11.998h-5.156c-0.607 0-1.038-0.589-0.86-1.169 0.499-1.626 2.012-2.813 3.798-2.821 0.477-0.002 0.887-0.367 0.917-0.843 0.032-0.523-0.382-0.958-0.899-0.958-3.193 0-5.791 2.598-5.791 5.791v2.934c0 0.046 0.005 0.091 0.011 0.135v4.911c0 0.995 0.806 1.801 1.801 1.801h6.18c0.995 0 1.801-0.806 1.801-1.801v-6.18c-0-0.995-0.806-1.801-1.801-1.801zM12.409 19.979h-4.379c-0.497 0-0.9-0.403-0.9-0.9v-4.379c0-0.497 0.403-0.9 0.9-0.9h4.379c0.497 0 0.9 0.403 0.9 0.9v4.379c0 0.497-0.403 0.9-0.9 0.9z"/>
<path d="M24.87 11.998h-5.156c-0.607 0-1.038-0.589-0.86-1.169 0.499-1.626 2.012-2.813 3.798-2.821 0.477-0.002 0.887-0.367 0.917-0.843 0.032-0.523-0.382-0.958-0.899-0.958-3.193 0-5.791 2.598-5.791 5.791v2.934c0 0.046 0.005 0.091 0.011 0.135v4.911c0 0.995 0.806 1.801 1.801 1.801h6.18c0.995 0 1.801-0.806 1.801-1.801v-6.18c0-0.995-0.806-1.801-1.801-1.801zM23.969 19.979h-4.379c-0.497 0-0.9-0.403-0.9-0.9v-4.379c0-0.497 0.403-0.9 0.9-0.9h4.379c0.497 0 0.9 0.403 0.9 0.9v4.379c0 0.497-0.403 0.9-0.9 0.9z"/>
</g>
    </svg>
  );
}

export default QuotesIcon;
