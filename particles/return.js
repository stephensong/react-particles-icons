import React from 'react'

const ReturnIcon = (props) => {
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
<path d="M3.581 16.104c0.001 0.009 0.003 0.018 0.004 0.027 0.004 0.025 0.008 0.049 0.014 0.073 0.002 0.009 0.005 0.018 0.007 0.027 0.007 0.024 0.014 0.048 0.023 0.071 0.003 0.008 0.005 0.015 0.008 0.023 0.012 0.029 0.025 0.058 0.039 0.086 0.001 0.001 0.001 0.002 0.001 0.003 0.016 0.029 0.033 0.057 0.052 0.084 0.005 0.007 0.010 0.013 0.015 0.020 0.014 0.019 0.029 0.038 0.045 0.056 0.007 0.008 0.014 0.016 0.022 0.024 0.016 0.017 0.033 0.033 0.050 0.049 0.007 0.006 0.013 0.013 0.021 0.019 0.025 0.021 0.051 0.041 0.078 0.060 0 0 0.001 0 0.001 0.001l5.311 3.541c0.397 0.264 0.944 0.181 1.216-0.211 0.277-0.399 0.171-0.946-0.231-1.214l-2.575-1.717c-0.114-0.076-0.060-0.254 0.077-0.254h16.246c2.427 0 4.404-1.965 4.423-4.388 0.004-0.46-0.34-0.863-0.799-0.898-0.508-0.038-0.933 0.363-0.933 0.863 0 1.484-1.207 2.691-2.691 2.691h-16.246c-0.137 0-0.191-0.178-0.077-0.254l2.575-1.717c0.398-0.265 0.505-0.803 0.24-1.201-0.167-0.25-0.441-0.386-0.721-0.386-0.165 0-0.332 0.047-0.479 0.146l-5.335 3.557c-0 0-0.001 0-0.001 0.001-0.027 0.018-0.053 0.038-0.078 0.060-0.007 0.006-0.014 0.012-0.021 0.019-0.017 0.016-0.034 0.032-0.050 0.049-0.007 0.008-0.015 0.016-0.022 0.024-0.016 0.018-0.031 0.037-0.045 0.056-0.005 0.007-0.010 0.013-0.015 0.020-0.019 0.027-0.036 0.055-0.052 0.084-0.001 0.001-0.001 0.002-0.001 0.003-0.015 0.028-0.028 0.056-0.039 0.086-0.003 0.007-0.006 0.015-0.008 0.023-0.009 0.023-0.016 0.047-0.023 0.071-0.002 0.009-0.005 0.018-0.007 0.027-0.006 0.024-0.010 0.048-0.014 0.073-0.001 0.009-0.003 0.018-0.004 0.027-0.004 0.033-0.006 0.066-0.006 0.1s0.002 0.067 0.006 0.1z"/>
</g>
    </svg>
  )
}

export default ReturnIcon

