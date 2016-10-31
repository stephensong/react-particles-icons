import React from 'react'

const ArrowSwIcon = (props) => {
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
<path d="M15.641 24.713c-0.038-0.495-0.47-0.865-0.964-0.827l-4.988 0.384c-0.256 0.020-0.398-0.29-0.217-0.471l16.554-16.554c0.342-0.342 0.373-0.899 0.048-1.257-0.348-0.382-0.939-0.392-1.3-0.031l-16.572 16.572c-0.181 0.181-0.491 0.039-0.471-0.217l0.384-4.988c0.038-0.495-0.332-0.926-0.827-0.965s-0.926 0.332-0.964 0.827l-0.626 8.134c-0.013 0.175 0.016 0.354 0.099 0.509 0.173 0.324 0.515 0.503 0.864 0.476l8.154-0.627c0.495-0.038 0.865-0.47 0.827-0.964z"/>
</g>
    </svg>
  )
}

export default ArrowSwIcon

