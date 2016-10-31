import React from 'react'

const PieIcon = (props) => {
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
<path d="M26.625 16.889h-10.613c-0.497 0-0.9-0.403-0.9-0.9v-10.613c0-0.502-0.409-0.901-0.902-0.901-0.024 0-0.047 0.001-0.071 0.003-6.42 0.497-11.476 5.864-11.476 12.412 0 6.895 5.554 12.449 12.449 12.449 0 0-0 0 0 0 6.548 0 11.915-5.055 12.412-11.476 0.041-0.525-0.372-0.974-0.898-0.974zM22.359 24.689c-1.975 1.837-4.55 2.848-7.249 2.848-2.854 0-5.53-1.105-7.537-3.111s-3.111-4.683-3.111-7.537c0-2.699 1.011-5.273 2.848-7.249 1.332-1.432 3.007-2.456 4.849-2.986 0.576-0.166 1.151 0.266 1.151 0.866v8.468c0 1.492 1.209 2.701 2.701 2.701h8.468c0.599 0 1.031 0.575 0.866 1.151-0.53 1.842-1.553 3.517-2.985 4.849z"/>
<path d="M29.336 14.112c-0.468-6.107-5.341-10.98-11.448-11.448-0.023-0.002-0.046-0.003-0.069-0.003-0.49 0-0.895 0.402-0.895 0.901v10.613c0 0.497 0.403 0.9 0.9 0.9h10.613c0.522 0 0.939-0.443 0.899-0.964zM18.724 12.375v-6.666c0-0.595 0.568-1.032 1.14-0.868 1.721 0.495 3.304 1.421 4.589 2.706s2.212 2.868 2.706 4.589c0.164 0.572-0.273 1.14-0.868 1.14h-6.666c-0.497 0-0.9-0.403-0.9-0.9z"/>
</g>
    </svg>
  )
}

export default PieIcon

