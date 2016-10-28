import React from 'react';

const AutoverIcon = (props) => {
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
<path d="M26.667 7.619v16.762c0 1.262-1.023 2.286-2.286 2.286h-16.762c-1.262 0-2.286-1.023-2.286-2.286v-13.714c0-1.262 1.023-2.286 2.286-2.286l6.855 0c0.001 0 0.001-0 0.002-0 0.421 0 0.762 0.341 0.762 0.762s-0.341 0.762-0.762 0.762h-6.857c-0.421 0-0.762 0.341-0.762 0.762v13.714c0 0.421 0.341 0.762 0.762 0.762h16.762c0.421 0 0.762-0.341 0.762-0.762v-16.762c0-0.421-0.341-0.762-0.762-0.762h-18.286c-0.42 0-0.761-0.341-0.761-0.761s0.341-0.761 0.761-0.761l18.286-0.001c1.262 0 2.286 1.023 2.286 2.286zM18.286 11.429h-8.381c-0.421 0-0.762 0.341-0.762 0.762v10.667c0 0.421 0.341 0.762 0.762 0.762h8.381c0.421 0 0.762-0.341 0.762-0.762v-10.667c0-0.421-0.341-0.762-0.762-0.762zM17.524 22.095h-6.857v-9.143l6.857 0v9.143zM20.516 23.619h1.579c0.421 0 0.762-0.341 0.762-0.762v-10.667c0-0.421-0.341-0.762-0.762-0.762h-1.585c-0.421 0-0.762 0.341-0.762 0.762v0c0 0.421 0.341 0.762 0.762 0.762h0.823l-0 9.143h-0.817c-0.423 0-0.765 0.344-0.762 0.767v0c0.003 0.419 0.343 0.756 0.762 0.756zM14.741 19.451l1.905-3.048c0.223-0.357 0.115-0.827-0.242-1.050s-0.827-0.115-1.050 0.242l-1.259 2.014-1.259-2.014c-0.223-0.357-0.693-0.465-1.050-0.242s-0.465 0.693-0.242 1.050l1.905 3.048c0.139 0.223 0.383 0.358 0.646 0.358s0.507-0.135 0.646-0.358z"/>
</g>
    </svg>
  );
}

export default AutoverIcon;
