import React from 'react'

const TimeIcon = (props) => {
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
<path d="M19.794 16.632c-0.153-0.408-0.153-0.857 0-1.265l4.875-11.068c0.524-1.19-0.348-2.527-1.648-2.527h-14.041c-1.301 0-2.172 1.336-1.648 2.527l4.875 11.068c0.153 0.408 0.153 0.857 0 1.265l-4.875 11.068c-0.524 1.19 0.348 2.527 1.648 2.527h14.041c1.301 0 2.172-1.336 1.648-2.527l-4.875-11.068zM10.36 28.427c-0.65 0-1.086-0.668-0.824-1.263l4.339-9.851 0.018-0.047c0.306-0.815 0.306-1.714 0-2.529l-0.018-0.047-0.020-0.046-4.318-9.805c-0.262-0.595 0.174-1.263 0.824-1.263h11.28c0.65 0 1.086 0.668 0.824 1.263-1.279 2.903-4.318 9.805-4.318 9.805l-0.020 0.046-0.018 0.047c-0.306 0.815-0.306 1.714 0 2.529l0.018 0.047 0.020 0.046 4.318 9.805c0.262 0.595-0.174 1.263-0.824 1.263h-11.28z"/>
<path d="M15.18 18.748l-3.048 6.705c-0.271 0.596 0.165 1.273 0.82 1.273h6.095c0.655 0 1.091-0.677 0.82-1.273l-3.048-6.705c-0.32-0.704-1.32-0.704-1.639 0z"/>
</g>
    </svg>
  )
}

export default TimeIcon

