import React from 'react'

const ArrowNeIcon = (props) => {
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
<path d="M16.359 7.287c0.038 0.495 0.47 0.865 0.964 0.827l4.988-0.384c0.256-0.020 0.398 0.29 0.217 0.471l-16.554 16.554c-0.342 0.342-0.373 0.899-0.048 1.257 0.348 0.382 0.939 0.392 1.3 0.031l16.572-16.572c0.181-0.181 0.491-0.039 0.471 0.217l-0.384 4.988c-0.038 0.495 0.332 0.926 0.827 0.965s0.926-0.332 0.964-0.827l0.626-8.134c0.014-0.175-0.016-0.354-0.099-0.509-0.173-0.324-0.515-0.503-0.864-0.476l-8.154 0.627c-0.495 0.038-0.865 0.47-0.827 0.964z"/>
</g>
    </svg>
  )
}

export default ArrowNeIcon

