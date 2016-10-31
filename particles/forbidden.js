import React from 'react'

const ForbiddenIcon = (props) => {
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
<path d="M16 3.551c-6.875 0-12.449 5.574-12.449 12.449s5.574 12.449 12.449 12.449 12.449-5.574 12.449-12.449c0-6.875-5.574-12.449-12.449-12.449zM23.529 23.529c-2.011 2.011-4.685 3.119-7.529 3.119s-5.518-1.108-7.529-3.119c-2.011-2.011-3.119-4.685-3.119-7.529s1.108-5.518 3.119-7.529c2.011-2.011 4.685-3.119 7.529-3.119s5.518 1.108 7.529 3.119c2.011 2.011 3.119 4.685 3.119 7.529s-1.108 5.518-3.119 7.529z"/>
<path d="M20.172 13.101c0.351-0.351 0.377-0.925 0.033-1.282-0.35-0.364-0.93-0.368-1.285-0.012l-2.284 2.284c-0.352 0.352-0.922 0.352-1.273 0l-2.283-2.284c-0.352-0.352-0.922-0.352-1.273 0s-0.352 0.922 0 1.273l2.284 2.284c0.352 0.352 0.352 0.922 0 1.273l-2.284 2.284c-0.352 0.352-0.352 0.922 0 1.273 0.176 0.176 0.406 0.264 0.637 0.264s0.461-0.088 0.637-0.264l2.283-2.284c0.352-0.352 0.922-0.352 1.273 0l2.283 2.284c0.176 0.176 0.406 0.264 0.637 0.264s0.461-0.088 0.637-0.264c0.35-0.35 0.331-0.942-0.019-1.292l-2.264-2.264c-0.352-0.352-0.352-0.922 0-1.273l2.262-2.262z"/>
</g>
    </svg>
  )
}

export default ForbiddenIcon

