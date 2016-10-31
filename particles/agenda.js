import React from 'react'

const AgendaIcon = (props) => {
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
<path d="M25.77 1.772h-18.651c-0.497 0-0.9 0.403-0.9 0.9v3.534h-0.889c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h0.889v2.645h-0.889c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h0.889v2.645h-0.889c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h0.889v2.645h-0.889c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h0.889v2.645h-0.889c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h0.889v3.534c0 0.497 0.403 0.9 0.9 0.9h18.651c0.497 0 0.9-0.403 0.9-0.9v-26.654c0-0.497-0.403-0.9-0.9-0.9zM8.019 25.793h0.841c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-0.867v-2.645h0.841c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-0.867v-2.645h0.841c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-0.867v-2.645h0.841c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-0.867v-2.645h0.841c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-0.867v-1.734c0-0.497 0.403-0.9 0.9-0.9h0.833c0.497 0 0.9 0.403 0.9 0.9v23.052c0 0.497-0.403 0.9-0.9 0.9h-0.833c-0.497 0-0.9-0.403-0.9-0.9v-1.734zM23.969 28.427h-10.614c-0.497 0-0.9-0.403-0.9-0.9v-23.052c0-0.497 0.403-0.9 0.9-0.9h10.615c0.497 0 0.9 0.403 0.9 0.9v23.052c-0 0.497-0.403 0.9-0.901 0.9z"/>
</g>
    </svg>
  )
}

export default AgendaIcon

