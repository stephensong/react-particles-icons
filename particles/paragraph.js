import React from 'react'

const ParagraphIcon = (props) => {
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

<path d="M24.861 5.763h-14.202c-0.055 0-0.109 0.006-0.162 0.015-2.374 0.085-4.274 2.030-4.284 4.422-0.011 2.375 1.877 4.36 4.25 4.462 0.582 0.025 1.141-0.062 1.656-0.241 0.585-0.203 1.196 0.23 1.196 0.85v10.041c0 0.485 0.373 0.902 0.857 0.925 0.517 0.024 0.944-0.388 0.944-0.899v-16.873c0-0.497 0.403-0.9 0.9-0.9h1.734c0.497 0 0.9 0.403 0.9 0.9v16.847c0 0.485 0.373 0.902 0.857 0.925 0.517 0.024 0.944-0.388 0.944-0.899v-16.873c0-0.497 0.403-0.9 0.9-0.9h3.534c0.512 0 0.924-0.427 0.899-0.944-0.023-0.484-0.44-0.857-0.925-0.857zM10.659 12.865c-1.459 0-2.645-1.187-2.645-2.645s1.187-2.645 2.645-2.645 2.645 1.187 2.645 2.645-1.187 2.645-2.645 2.645z"/>
</g>
    </svg>
  )
}

export default ParagraphIcon

