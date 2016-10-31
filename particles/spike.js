import React from 'react'

const SpikeIcon = (props) => {
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
<path d="M29.734 28.993l-6.046-15.115c-0.147-0.368-0.491-0.566-0.838-0.566-0.258 0-0.517 0.109-0.701 0.338l-5.788 7.234c-0.173 0.217-0.434 0.338-0.703 0.338-0.073 0-0.146-0.009-0.218-0.027l-5.938-1.484c-0.073-0.018-0.146-0.027-0.218-0.027-0.296 0-0.58 0.147-0.749 0.401l-5.828 8.743c-0.399 0.598 0.030 1.4 0.749 1.4h25.443c0.637 0 1.073-0.643 0.836-1.235zM6.071 27.027l3.258-4.887c0.211-0.317 0.598-0.466 0.968-0.374l4.706 1.177c0.214 0.054 0.435 0.081 0.655 0.081 0.825 0 1.594-0.37 2.109-1.014l3.857-4.821c0.431-0.539 1.283-0.413 1.539 0.228l3.91 9.776c0.237 0.591-0.199 1.235-0.836 1.235h-19.418c-0.719 0-1.148-0.802-0.749-1.4z"/>
<path d="M3.411 24.502l4.983-7.475 5.958 1.49c0.666 0.167 1.357-0.054 1.804-0.575l9.040-10.547-0.633 3.163c-0.094 0.469 0.21 0.925 0.679 1.019 0.057 0.011 0.114 0.017 0.171 0.017 0.404 0 0.766-0.285 0.848-0.696l1.258-6.288c0.057-0.284-0.032-0.577-0.237-0.782s-0.498-0.293-0.782-0.237l-6.288 1.258c-0.469 0.094-0.773 0.55-0.679 1.019s0.55 0.774 1.019 0.679l3.62-0.724-9.021 10.525c-0.222 0.259-0.571 0.37-0.902 0.288l-5.418-1.355c-0.736-0.184-1.514 0.117-1.935 0.748l-4.983 7.475c-0.276 0.414-0.164 0.973 0.25 1.249 0.154 0.102 0.327 0.151 0.499 0.151 0.291-0 0.577-0.141 0.75-0.401z"/>
</g>
    </svg>
  )
}

export default SpikeIcon

