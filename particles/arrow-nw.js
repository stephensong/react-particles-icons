import React from 'react'

const ArrowNwIcon = (props) => {
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

<path d="M7.287 15.641c0.495-0.038 0.865-0.47 0.827-0.964l-0.384-4.988c-0.020-0.256 0.29-0.398 0.471-0.217l16.554 16.554c0.342 0.342 0.899 0.373 1.257 0.048 0.382-0.348 0.392-0.939 0.031-1.3l-16.572-16.572c-0.181-0.181-0.039-0.491 0.217-0.471l4.988 0.384c0.495 0.038 0.926-0.332 0.965-0.827s-0.332-0.926-0.827-0.964l-8.134-0.626c-0.175-0.013-0.354 0.016-0.509 0.099-0.324 0.173-0.503 0.515-0.476 0.864l0.627 8.154c0.038 0.495 0.47 0.865 0.964 0.827z"/>
</g>
    </svg>
  )
}

export default ArrowNwIcon

