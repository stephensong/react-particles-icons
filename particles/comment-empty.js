import React from 'react'

const CommentEmptyIcon = (props) => {
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

<path d="M30.228 8.909c0-0.995-0.806-1.801-1.801-1.801h-24.853c-0.995 0-1.801 0.806-1.801 1.801v14.183c0 0.995 0.806 1.801 1.801 1.801h17.741c0.391 0 0.771 0.127 1.084 0.363l6.399 4.822c0.165 0.12 0.348 0.174 0.526 0.174 0.467 0 0.904-0.37 0.904-0.902v-6.235c0 0-0.001 0-0.001 0 0-0.007 0.001-0.015 0.001-0.022v-14.183zM28.449 25.81c0 0.732-0.828 1.158-1.424 0.733l-4.331-3.094c-0.305-0.218-0.671-0.335-1.047-0.335h-17.196c-0.497 0-0.9-0.403-0.9-0.9v-12.427c0-0.497 0.403-0.9 0.9-0.9h23.097c0.497 0 0.9 0.403 0.9 0.9v16.024z"/>
</g>
    </svg>
  )
}

export default CommentEmptyIcon

