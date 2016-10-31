import React from 'react'

const ArrowsBreveIcon = (props) => {
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
<path d="M23.102 13.162c0 0.198-0.081 0.395-0.241 0.537l-6.384 5.674c-0.272 0.242-0.682 0.242-0.954 0l-6.384-5.674c-0.297-0.264-0.323-0.718-0.060-1.014s0.718-0.323 1.014-0.060l5.613 4.989c0.167 0.149 0.42 0.149 0.587 0l5.613-4.989c0.296-0.264 0.75-0.237 1.014 0.060 0.122 0.137 0.181 0.307 0.181 0.477z"/>
</g>
    </svg>
  )
}

export default ArrowsBreveIcon

