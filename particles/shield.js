import React from 'react'

const ShieldIcon = (props) => {
  const computedSize = props.size || '1em'
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

<path d="M25.73 6.612l-8.931-4.652c-0.003-0.002-0.006-0.003-0.009-0.005-0.244-0.123-0.517-0.189-0.789-0.189s-0.546 0.065-0.789 0.189c-0.003 0.002-0.006 0.003-0.009 0.005l-8.931 4.652c-0.588 0.3-0.952 0.896-0.952 1.556v7.035c0 3.217 0.998 6.346 2.886 9.049 1.862 2.664 4.442 4.711 7.461 5.919 0.107 0.043 0.221 0.064 0.334 0.064s0.227-0.021 0.334-0.064c3.020-1.208 5.6-3.255 7.461-5.919 1.888-2.702 2.886-5.831 2.886-9.049v-7.035c0-0.66-0.365-1.256-0.952-1.556zM24.881 15.202c0 5.496-3.387 10.623-8.503 12.989-0.239 0.111-0.516 0.111-0.756 0-5.116-2.366-8.503-7.492-8.503-12.989v-6.456c0-0.336 0.187-0.644 0.484-0.799l7.981-4.157c0.261-0.136 0.571-0.136 0.832 0l7.981 4.157c0.298 0.155 0.484 0.463 0.484 0.799v6.456z"/>
</g>
    </svg>
  )
}

export default ShieldIcon

