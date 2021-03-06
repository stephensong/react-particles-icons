import React from 'react'

const ArrowRightIcon = (props) => {
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

<path d="M22.414 10.093c-0.323 0.377-0.279 0.944 0.097 1.267l3.799 3.256c0.195 0.167 0.077 0.486-0.18 0.486h-23.411c-0.484 0-0.9 0.372-0.923 0.855-0.024 0.516 0.387 0.942 0.897 0.942h23.436c0.257 0 0.375 0.319 0.18 0.486l-3.799 3.256c-0.377 0.323-0.42 0.89-0.097 1.267s0.89 0.42 1.267 0.097l6.194-5.309c0.134-0.115 0.238-0.262 0.29-0.43 0.107-0.352-0.008-0.719-0.274-0.947l-6.209-5.322c-0.377-0.323-0.944-0.279-1.267 0.097z"/>
</g>
    </svg>
  )
}

export default ArrowRightIcon

