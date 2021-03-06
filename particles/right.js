import React from 'react'

const RightIcon = (props) => {
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

<path d="M11.271 24.659c-0 0-0 0-0 0-2.278-0-4.131-1.855-4.131-4.136v-9.046c0-2.28 1.853-4.136 4.131-4.136 0.597 0 1.18 0.129 1.732 0.384l9.8 4.523c1.481 0.683 2.4 2.121 2.4 3.751s-0.92 3.068-2.4 3.752l-9.8 4.523c-0.552 0.255-1.135 0.384-1.732 0.384zM11.271 9.142c-1.285 0-2.331 1.047-2.331 2.335v9.046c0 1.287 1.045 2.335 2.331 2.335h0c0.334 0 0.663-0.073 0.977-0.218l9.8-4.523c0.848-0.391 1.354-1.183 1.354-2.116s-0.506-1.725-1.354-2.116l-9.8-4.523c-0.314-0.145-0.643-0.218-0.977-0.218z"/>
</g>
    </svg>
  )
}

export default RightIcon

