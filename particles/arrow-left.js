import React from 'react'

const ArrowLeftIcon = (props) => {
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

<path d="M9.586 21.907c0.323-0.377 0.279-0.944-0.097-1.267l-3.799-3.256c-0.195-0.167-0.077-0.486 0.18-0.486h23.411c0.484 0 0.9-0.372 0.923-0.855 0.024-0.516-0.387-0.942-0.897-0.942h-23.436c-0.257 0-0.375-0.319-0.18-0.486l3.799-3.256c0.377-0.323 0.42-0.89 0.097-1.267s-0.89-0.42-1.267-0.097l-6.194 5.309c-0.134 0.115-0.238 0.262-0.29 0.43-0.107 0.352 0.008 0.719 0.274 0.947l6.209 5.322c0.377 0.323 0.944 0.279 1.267-0.097z"/>
</g>
    </svg>
  )
}

export default ArrowLeftIcon

