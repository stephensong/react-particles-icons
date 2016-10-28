import React from 'react';

const ChipIcon = (props) => {
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
<path d="M23.092 7.108h-14.183c-0.995 0-1.801 0.806-1.801 1.801v14.183c0 0.995 0.806 1.801 1.801 1.801h14.183c0.995 0 1.801-0.806 1.801-1.801v-14.183c0-0.995-0.806-1.801-1.801-1.801zM23.092 22.191c0 0.497-0.403 0.9-0.9 0.9h-12.382c-0.497 0-0.9-0.403-0.9-0.9v-12.382c0-0.497 0.403-0.9 0.9-0.9h12.382c0.497 0 0.9 0.403 0.9 0.9v12.382z"/>
<path d="M18.075 6.23c0.497 0 0.9-0.403 0.9-0.9v-2.668c0-0.497-0.403-0.9-0.9-0.9s-0.9 0.403-0.9 0.9v2.668c0 0.497 0.403 0.9 0.9 0.9z"/>
<path d="M13.925 6.23c0.497 0 0.9-0.403 0.9-0.9v-2.668c0-0.497-0.403-0.9-0.9-0.9s-0.9 0.403-0.9 0.9v2.668c0 0.497 0.403 0.9 0.9 0.9z"/>
<path d="M9.775 6.23c0.497 0 0.9-0.403 0.9-0.9v-2.668c0-0.497-0.403-0.9-0.9-0.9s-0.9 0.403-0.9 0.9v2.668c0 0.497 0.403 0.9 0.9 0.9z"/>
<path d="M22.225 6.23c0.497 0 0.9-0.403 0.9-0.9v-2.668c0-0.497-0.403-0.9-0.9-0.9s-0.9 0.403-0.9 0.9v2.668c0 0.497 0.403 0.9 0.9 0.9z"/>
<path d="M18.075 25.77c-0.497 0-0.9 0.403-0.9 0.9v2.668c0 0.497 0.403 0.9 0.9 0.9s0.9-0.403 0.9-0.9v-2.668c0-0.497-0.403-0.9-0.9-0.9z"/>
<path d="M13.925 25.77c-0.497 0-0.9 0.403-0.9 0.9v2.668c0 0.497 0.403 0.9 0.9 0.9s0.9-0.403 0.9-0.9v-2.668c0-0.497-0.403-0.9-0.9-0.9z"/>
<path d="M9.775 25.77c-0.497 0-0.9 0.403-0.9 0.9v2.668c0 0.497 0.403 0.9 0.9 0.9s0.9-0.403 0.9-0.9v-2.668c0-0.497-0.403-0.9-0.9-0.9z"/>
<path d="M22.225 25.77c-0.497 0-0.9 0.403-0.9 0.9v2.668c0 0.497 0.403 0.9 0.9 0.9s0.9-0.403 0.9-0.9v-2.668c0-0.497-0.403-0.9-0.9-0.9z"/>
<path d="M29.338 17.174h-2.668c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h2.668c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M29.338 13.025h-2.668c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h2.668c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M26.671 10.676h2.668c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9h-2.668c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9z"/>
<path d="M29.338 21.324h-2.668c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h2.668c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M5.329 17.174h-2.668c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h2.668c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M5.329 13.025h-2.668c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h2.668c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M5.329 8.875h-2.668c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h2.668c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M5.329 21.324h-2.668c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h2.668c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
</g>
    </svg>
  );
}

export default ChipIcon;
