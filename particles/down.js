import React from 'react'

const DownIcon = (props) => {
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

<path d="M7.513 11.1c0-0 0-0 0-0 0-2.278 1.855-4.131 4.136-4.131h9.046c2.28 0 4.136 1.853 4.136 4.131 0 0.597-0.129 1.18-0.384 1.732l-4.523 9.8c-0.683 1.481-2.121 2.4-3.751 2.4s-3.068-0.92-3.752-2.4l-4.523-9.8c-0.255-0.552-0.384-1.135-0.384-1.732zM23.029 11.1c0-1.285-1.047-2.331-2.335-2.331h-9.046c-1.287 0-2.335 1.045-2.335 2.331v0c0 0.334 0.073 0.663 0.218 0.977l4.523 9.8c0.391 0.848 1.183 1.354 2.116 1.354s1.725-0.506 2.116-1.354l4.523-9.8c0.145-0.314 0.218-0.643 0.218-0.977z"/>
</g>
    </svg>
  )
}

export default DownIcon

