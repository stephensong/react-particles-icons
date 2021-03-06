import React from 'react'

const CaretIcon = (props) => {
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

<path d="M16 19.555c-0.171 0-0.341-0.060-0.477-0.181l-6.384-5.675c-0.223-0.198-0.3-0.513-0.194-0.792s0.373-0.463 0.671-0.463h12.768c0.298 0 0.565 0.184 0.671 0.463s0.029 0.594-0.194 0.792l-6.384 5.675c-0.136 0.121-0.307 0.181-0.477 0.181zM11.94 14.267l3.913 3.479c0.084 0.074 0.21 0.074 0.294 0l3.913-3.479c0.152-0.135 0.056-0.386-0.147-0.386h-7.827c-0.203 0-0.299 0.251-0.147 0.386z"/>
</g>
    </svg>
  )
}

export default CaretIcon

