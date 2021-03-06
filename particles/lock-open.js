import React from 'react'

const LockOpenIcon = (props) => {
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

<path d="M15.886 17.782c-0.895 0.056-1.62 0.792-1.663 1.688-0.027 0.561 0.207 1.068 0.59 1.411 0.19 0.17 0.297 0.413 0.297 0.668v1.54c0 0.479 0.368 0.891 0.846 0.913 0.511 0.024 0.932-0.383 0.932-0.888v-1.545c0-0.26 0.103-0.513 0.297-0.687 0.364-0.326 0.593-0.798 0.593-1.325-0-1.020-0.858-1.839-1.892-1.775z"/>
<path d="M22.359 13.915h-11.227c-0.497 0-0.9-0.403-0.9-0.9v-1.905c0-3.181 2.588-5.769 5.769-5.769 1.422 0 2.788 0.522 3.846 1.469 0.371 0.332 0.94 0.3 1.271-0.070s0.3-0.94-0.070-1.271c-1.389-1.243-3.181-1.928-5.047-1.928-4.174 0-7.57 3.396-7.57 7.57v3.112c0 0.002 0 0.004 0 0.006-0.772 0.428-1.296 1.251-1.296 2.194v3.208c0 4.877 3.954 8.831 8.831 8.831h0.069c4.877 0 8.831-3.954 8.831-8.831v-3.208c0-1.384-1.122-2.507-2.507-2.507zM23.065 19.629c0 3.877-3.154 7.030-7.030 7.030h-0.069c-3.877 0-7.030-3.154-7.030-7.030v-3.208c0-0.389 0.317-0.706 0.706-0.706h12.718c0.389 0 0.706 0.317 0.706 0.706v3.208z"/>
</g>
    </svg>
  )
}

export default LockOpenIcon

