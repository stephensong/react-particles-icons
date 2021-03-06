import React from 'react'

const ExclamationIcon = (props) => {
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

<path d="M16 3.551c-6.875 0-12.449 5.574-12.449 12.449s5.574 12.449 12.449 12.449c6.875 0 12.449-5.574 12.449-12.449s-5.574-12.449-12.449-12.449v0zM23.518 23.518c-2.011 2.011-4.685 3.119-7.529 3.119s-5.518-1.108-7.529-3.119c-2.011-2.011-3.119-4.685-3.119-7.529s1.108-5.518 3.119-7.529c2.011-2.011 4.685-3.119 7.529-3.119s5.518 1.108 7.529 3.119c2.011 2.011 3.119 4.685 3.119 7.529s-1.108 5.518-3.119 7.529v-0zM15.986 8.975c-0.497 0-0.9 0.403-0.9 0.9v8.892c0 0.497 0.403 0.9 0.9 0.9s0.9-0.403 0.9-0.9v-8.892c0-0.497-0.403-0.9-0.9-0.9v0zM15.086 22.142c0-0.497 0.403-0.9 0.9-0.9s0.9 0.403 0.9 0.9c0 0.497-0.403 0.9-0.9 0.9s-0.9-0.403-0.9-0.9v0z"/>
</g>
    </svg>
  )
}

export default ExclamationIcon

