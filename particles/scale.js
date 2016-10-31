import React from 'react'

const ScaleIcon = (props) => {
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
<path d="M18.713 18.42l-0.001 0.002c-0.052 0.182-0.079 0.37-0.079 0.56v0.506c0 2.471 1.962 4.532 4.432 4.57 2.514 0.038 4.572-1.996 4.572-4.502 0-0.597-0.084-1.192-0.248-1.766l-2.483-8.656c-0.162-0.564 0.262-1.127 0.849-1.127 0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-1.712l-0.060-0.21c-0.102-0.358-0.405-0.634-0.775-0.674-0.442-0.048-0.845 0.23-0.964 0.648l-0.067 0.236h-4.644c-0.158-0.273-0.386-0.501-0.659-0.659v-1.083c0-0.485-0.373-0.902-0.857-0.925-0.517-0.024-0.944 0.388-0.944 0.899v1.108c-0.273 0.158-0.501 0.386-0.659 0.659h-4.666l-0.060-0.21c-0.102-0.358-0.405-0.634-0.775-0.674-0.442-0.048-0.845 0.23-0.964 0.648l-0.067 0.236h-1.664c-0.485 0-0.902 0.373-0.925 0.857-0.024 0.517 0.388 0.944 0.899 0.944h0.004c0.587 0 1.010 0.562 0.849 1.126l-2.654 9.289c-0.052 0.182-0.079 0.37-0.079 0.56v0.506c0 2.471 1.962 4.532 4.432 4.57 2.514 0.038 4.572-1.996 4.572-4.502v-0.574c0-0.189-0.027-0.378-0.079-0.56l-0.001-0.002-2.647-9.264c-0.164-0.575 0.268-1.148 0.866-1.148h2.958c0.158 0.273 0.386 0.501 0.659 0.659v18.87c0 0.497-0.403 0.9-0.9 0.9h-6.177c-0.485 0-0.902 0.373-0.925 0.857-0.024 0.517 0.388 0.944 0.899 0.944h15.98c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-6.202c-0.497 0-0.9-0.403-0.9-0.9v-18.87c0.273-0.158 0.501-0.386 0.659-0.659h2.935c0.598 0 1.030 0.573 0.866 1.148l-2.647 9.264zM11.091 18.656h-4.5c-0.184 0-0.317-0.176-0.266-0.353l2.25-7.875c0.077-0.268 0.456-0.268 0.533 0l2.25 7.875c0.051 0.177-0.082 0.353-0.266 0.353zM23.403 10.429l2.25 7.875c0.051 0.177-0.082 0.353-0.266 0.353h-4.5c-0.184 0-0.317-0.176-0.266-0.353l2.25-7.875c0.077-0.268 0.456-0.268 0.533 0z"/>
</g>
    </svg>
  )
}

export default ScaleIcon

