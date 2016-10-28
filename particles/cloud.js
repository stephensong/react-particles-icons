import React from 'react';

const CloudIcon = (props) => {
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
<path d="M18.223 7.13l0.028 0c1.79 0.007 3.469 0.725 4.728 2.021 1.261 1.297 1.931 2.998 1.888 4.79-0.010 0.398-0.055 0.796-0.135 1.184l-0.154 0.758c-0.089 0.435 0.154 0.87 0.57 1.024l0.717 0.265c0.744 0.284 1.38 0.78 1.841 1.436 0.471 0.67 0.72 1.459 0.72 2.282 0 1.382-0.7 2.649-1.871 3.388-0.613 0.387-1.345 0.591-2.119 0.591l-15.446-0.010c-3.038-0.176-5.417-2.701-5.417-5.747 0-3.175 2.583-5.758 5.758-5.758 0.11 0 0.835 0.012 1.403 0.022 0.41 0.007 0.773-0.263 0.883-0.658l0.183-0.655 0.002-0.009c0.775-2.899 3.416-4.924 6.421-4.924zM18.223 5.329c-3.677 0-6.805 2.349-7.965 5.629-0.129 0.364-0.478 0.603-0.865 0.596-0.022-0-0.043-0.001-0.062-0.001-4.174 0-7.558 3.384-7.558 7.558 0 4.025 3.146 7.315 7.114 7.545v0.013h15.55c1.087 0 2.161-0.288 3.080-0.869 1.628-1.027 2.711-2.847 2.711-4.911 0-2.247-1.283-4.194-3.156-5.15-0.336-0.172-0.528-0.537-0.481-0.911 0.037-0.289 0.072-0.615 0.077-0.845 0.114-4.71-3.697-8.635-8.409-8.655-0.012-0-0.024-0-0.036-0v0z"/>
</g>
    </svg>
  );
}

export default CloudIcon;
