import React from 'react'

const TwitterFullIcon = (props) => {
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
<path d="M27.157 1.801h-22.313c-1.681 0-3.043 1.362-3.043 3.043v22.313c0 1.68 1.362 3.043 3.043 3.043h22.313c1.68 0 3.043-1.362 3.043-3.043v-22.313c0-1.68-1.362-3.043-3.043-3.043zM24.184 16.093c-0.338 0.169-0.782 0.243-1.332 0.222-0.359 1.501-1.179 2.754-2.458 3.759s-2.723 1.655-4.33 1.951c-1.607 0.296-3.235 0.19-4.885-0.317s-3.045-1.533-4.187-3.077c0.867 0.825 1.956 1.248 3.267 1.269s2.453-0.465 3.426-1.459c-0.571 0.085-0.983-0.074-1.237-0.476s-0.032-0.751 0.666-1.047c-0.613 0.063-1.1-0.032-1.459-0.285s-0.613-0.518-0.761-0.793c0.148-0.169 0.312-0.291 0.492-0.365s0.428-0.122 0.745-0.143c-0.677-0.148-1.163-0.381-1.459-0.698s-0.476-0.677-0.539-1.078c0.169-0.042 0.359-0.079 0.571-0.111s0.381-0.037 0.508-0.016c-0.592-0.317-1.004-0.687-1.237-1.11s-0.328-0.814-0.286-1.174c1.057 0.402 1.951 0.767 2.68 1.094s1.38 0.64 1.951 0.936c0.19 0.106 0.396 0.254 0.619 0.444s0.46 0.412 0.714 0.666c0.338-0.867 0.724-1.702 1.158-2.506s0.989-1.417 1.665-1.84c0 0.085-0.026 0.174-0.079 0.27s-0.111 0.185-0.174 0.27c0.19-0.19 0.407-0.344 0.65-0.46s0.492-0.185 0.745-0.206c-0.021 0.19-0.143 0.344-0.365 0.46s-0.418 0.206-0.587 0.27c0.127-0.042 0.434-0.153 0.92-0.333s0.761-0.185 0.825-0.016c0.085 0.19-0.053 0.333-0.412 0.428s-0.592 0.164-0.698 0.206c-0.063 0.021-0.132 0.042-0.206 0.063s-0.143 0.053-0.206 0.095c0.846-0.085 1.634 0.174 2.363 0.777s1.211 1.338 1.443 2.205c0.021 0.063 0.042 0.132 0.063 0.206s0.032 0.143 0.032 0.206c0.317 0.106 0.708 0.122 1.174 0.048s0.782-0.164 0.952-0.27c-0.127 0.296-0.359 0.55-0.698 0.761s-0.761 0.338-1.269 0.381c0.254 0.106 0.582 0.18 0.983 0.222s0.761 0.042 1.078 0c-0.211 0.211-0.486 0.402-0.825 0.571z"/>
</g>
    </svg>
  )
}

export default TwitterFullIcon

