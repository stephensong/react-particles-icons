import React from 'react'

const ProtectionIcon = (props) => {
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
<path d="M26.667 7.619v16.762c0 1.262-1.023 2.286-2.286 2.286h-16.762c-1.262 0-2.286-1.023-2.286-2.286v-13.714c0-1.262 1.023-2.286 2.286-2.286l6.855 0c0.001 0 0.001-0 0.002-0 0.421 0 0.762 0.341 0.762 0.762s-0.341 0.762-0.762 0.762h-6.857c-0.421 0-0.762 0.341-0.762 0.762v13.714c0 0.421 0.341 0.762 0.762 0.762h16.762c0.421 0 0.762-0.341 0.762-0.762v-16.762c0-0.421-0.341-0.762-0.762-0.762h-18.286c-0.42 0-0.761-0.341-0.761-0.761s0.341-0.761 0.761-0.761l18.286-0.001c1.262 0 2.286 1.023 2.286 2.286zM20.571 16h-0.762v-0.762c0-2.101-1.709-3.81-3.81-3.81s-3.81 1.709-3.81 3.81v0.762h-0.762c-0.421 0-0.762 0.341-0.762 0.762v6.095c0 0.421 0.341 0.762 0.762 0.762h9.143c0.421 0 0.762-0.341 0.762-0.762v-6.095c0-0.421-0.341-0.762-0.762-0.762zM13.714 15.238c0-1.26 1.025-2.286 2.286-2.286s2.286 1.025 2.286 2.286v0.762h-4.571v-0.762zM19.81 22.095h-7.619v-4.571h7.619v4.571z"/>
</g>
    </svg>
  )
}

export default ProtectionIcon

