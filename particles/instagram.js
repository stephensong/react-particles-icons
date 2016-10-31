import React from 'react'

const InstagramIcon = (props) => {
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
<path d="M27.157 1.801h-22.313c-1.681 0-3.043 1.362-3.043 3.043v22.313c0 1.68 1.362 3.043 3.043 3.043h22.313c1.68 0 3.043-1.362 3.043-3.043v-22.313c0-1.68-1.362-3.043-3.043-3.043v0zM16 10.3c3.135 0 5.7 2.565 5.7 5.7s-2.565 5.7-5.7 5.7c-3.135 0-5.7-2.565-5.7-5.7s2.565-5.7 5.7-5.7zM5.313 27.4c-0.428 0-0.713-0.285-0.713-0.712v-12.113h2.992c-0.143 0.428-0.143 0.998-0.143 1.425 0 4.703 3.848 8.55 8.55 8.55s8.55-3.848 8.55-8.55c0-0.428 0-0.998-0.142-1.425h2.992v12.113c0 0.427-0.285 0.712-0.712 0.712h-21.375zM27.4 8.162c0 0.428-0.285 0.713-0.712 0.713h-2.85c-0.427 0-0.712-0.285-0.712-0.713v-2.85c0-0.428 0.285-0.713 0.712-0.713h2.85c0.427 0 0.712 0.285 0.712 0.713v2.85z"/>
</g>
    </svg>
  )
}

export default InstagramIcon

