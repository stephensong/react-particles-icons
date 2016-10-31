import React from 'react'

const ConcentricIcon = (props) => {
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
<path d="M13.306 12.372c-0.003-0.033-0.007-0.065-0.013-0.097-0-0-0-0.001-0-0.001l-1.258-6.288c-0.094-0.469-0.55-0.773-1.019-0.679s-0.773 0.55-0.679 1.019l0.607 3.035c0.027 0.134-0.137 0.222-0.234 0.125l-7.436-7.436c-0.338-0.338-0.886-0.338-1.224 0s-0.338 0.886 0 1.224l7.436 7.436c0.097 0.097 0.009 0.261-0.125 0.234l-3.035-0.607c-0.469-0.094-0.925 0.21-1.019 0.679s0.21 0.925 0.679 1.019l6.288 1.258c0 0 0.001 0 0.001 0 0.024 0.005 0.049 0.008 0.074 0.011 0.004 0 0.007 0.001 0.011 0.002 0.028 0.003 0.056 0.004 0.084 0.004s0.056-0.001 0.084-0.004c0.005-0.001 0.010-0.002 0.016-0.002 0.023-0.003 0.046-0.006 0.068-0.010 0.003-0.001 0.007-0.002 0.010-0.002 0.024-0.005 0.048-0.011 0.072-0.018 0.001-0 0.002-0.001 0.003-0.001 0.079-0.024 0.155-0.059 0.226-0.107 0.004-0.002 0.007-0.005 0.011-0.008 0.020-0.014 0.039-0.027 0.058-0.043 0.022-0.018 0.044-0.038 0.065-0.058 0.024-0.024 0.046-0.049 0.066-0.075 0.006-0.007 0.011-0.015 0.016-0.022 0.015-0.020 0.029-0.040 0.042-0.061 0.005-0.008 0.010-0.016 0.014-0.024 0.012-0.022 0.024-0.044 0.034-0.066 0.003-0.007 0.007-0.014 0.010-0.022 0.013-0.029 0.024-0.059 0.033-0.089 0-0.001 0.001-0.002 0.001-0.002 0.009-0.031 0.017-0.063 0.023-0.096 0.001-0.008 0.002-0.016 0.004-0.025 0.004-0.024 0.006-0.047 0.008-0.071 0.001-0.011 0.001-0.022 0.002-0.033 0.001-0.023 0-0.046-0.001-0.070-0-0.009-0.001-0.019-0.001-0.028z"/>
<path d="M22.515 21.29c-0.097-0.097-0.009-0.261 0.125-0.234l3.035 0.607c0.468 0.094 0.925-0.21 1.019-0.679s-0.21-0.925-0.679-1.019l-6.288-1.258c-0-0-0.001-0-0.001-0-0.032-0.006-0.064-0.011-0.097-0.013-0.010-0.001-0.021-0.001-0.031-0.001-0.022-0.001-0.044-0.001-0.066-0.001-0.012 0-0.024 0.001-0.036 0.002-0.022 0.002-0.044 0.004-0.066 0.007-0.010 0.001-0.020 0.003-0.030 0.004-0.031 0.006-0.063 0.013-0.093 0.022-0.003 0.001-0.006 0.002-0.009 0.003-0.028 0.009-0.056 0.019-0.083 0.031-0.008 0.003-0.016 0.007-0.024 0.011-0.022 0.010-0.043 0.021-0.064 0.033-0.009 0.005-0.017 0.010-0.025 0.015-0.021 0.013-0.041 0.027-0.060 0.041-0.007 0.005-0.015 0.010-0.022 0.016-0.026 0.021-0.051 0.042-0.075 0.066s-0.046 0.049-0.066 0.075c-0.006 0.007-0.011 0.014-0.016 0.022-0.015 0.020-0.029 0.040-0.042 0.061-0.005 0.008-0.010 0.016-0.014 0.024-0.013 0.022-0.024 0.044-0.035 0.067-0.003 0.007-0.007 0.014-0.010 0.021-0.013 0.029-0.024 0.059-0.033 0.090-0 0.001-0 0.001-0.001 0.002-0.010 0.032-0.017 0.064-0.023 0.096-0.001 0.008-0.002 0.016-0.003 0.024-0.004 0.024-0.006 0.048-0.008 0.072-0.001 0.011-0.001 0.021-0.002 0.032-0.001 0.024-0 0.047 0.001 0.071 0 0.009 0.001 0.018 0.001 0.027 0.003 0.033 0.007 0.066 0.013 0.098 0 0 0 0 0 0.001l1.258 6.288c0.082 0.412 0.444 0.696 0.848 0.696 0.056 0 0.113-0.005 0.171-0.017 0.469-0.094 0.773-0.55 0.679-1.019l-0.607-3.035c-0.027-0.134 0.137-0.222 0.234-0.125l7.436 7.436c0.169 0.169 0.391 0.254 0.612 0.254s0.443-0.084 0.612-0.253c0.337-0.337 0.319-0.906-0.018-1.243l-7.418-7.418z"/>
<path d="M13.307 19.6c0.001-0.023 0.002-0.046 0.001-0.070-0-0.011-0.001-0.022-0.002-0.033-0.002-0.024-0.004-0.048-0.008-0.071-0.001-0.008-0.002-0.016-0.004-0.025-0.006-0.032-0.013-0.064-0.023-0.096-0-0.001-0.001-0.002-0.001-0.003-0.009-0.030-0.020-0.060-0.033-0.089-0.003-0.007-0.007-0.014-0.010-0.022-0.010-0.023-0.022-0.045-0.034-0.067-0.005-0.008-0.009-0.016-0.014-0.024-0.013-0.021-0.027-0.041-0.042-0.061-0.005-0.007-0.010-0.015-0.016-0.022-0.021-0.026-0.042-0.051-0.066-0.075s-0.049-0.046-0.075-0.066c-0.007-0.006-0.015-0.011-0.022-0.016-0.020-0.015-0.040-0.029-0.061-0.041-0.008-0.005-0.016-0.010-0.025-0.015-0.022-0.012-0.044-0.024-0.066-0.034-0.007-0.003-0.015-0.007-0.022-0.010-0.029-0.012-0.058-0.023-0.088-0.033-0.001-0-0.002-0.001-0.003-0.001-0.031-0.009-0.063-0.017-0.096-0.023-0.008-0.001-0.016-0.002-0.025-0.004-0.024-0.004-0.047-0.006-0.071-0.008-0.011-0.001-0.021-0.001-0.032-0.002-0.023-0.001-0.047-0-0.070 0.001-0.009 0-0.018 0.001-0.028 0.001-0.033 0.003-0.065 0.007-0.098 0.013-0 0-0.001 0-0.001 0l-6.288 1.258c-0.469 0.094-0.773 0.55-0.679 1.019s0.55 0.773 1.019 0.679l3.035-0.607c0.134-0.027 0.222 0.137 0.125 0.234l-7.436 7.436c-0.338 0.338-0.338 0.886 0 1.224 0.169 0.169 0.391 0.254 0.612 0.254s0.443-0.085 0.612-0.254l7.436-7.436c0.097-0.097 0.261-0.009 0.234 0.125l-0.601 3.007c-0.093 0.467 0.192 0.941 0.657 1.044 0.063 0.014 0.125 0.020 0.187 0.020 0.404 0 0.766-0.285 0.848-0.696l1.258-6.288c0-0 0-0.001 0-0.001 0.006-0.032 0.011-0.065 0.013-0.097 0.001-0.009 0.001-0.019 0.001-0.028z"/>
<path d="M18.693 12.399c-0.001 0.024-0.002 0.047-0.001 0.071 0 0.011 0.001 0.021 0.002 0.032 0.002 0.024 0.004 0.048 0.008 0.072 0.001 0.008 0.002 0.016 0.003 0.024 0.006 0.032 0.013 0.064 0.023 0.096 0 0.001 0 0.001 0.001 0.002 0.009 0.030 0.021 0.060 0.033 0.090 0.003 0.007 0.007 0.014 0.010 0.021 0.010 0.023 0.022 0.045 0.035 0.067 0.005 0.008 0.009 0.016 0.014 0.024 0.013 0.021 0.027 0.041 0.042 0.061 0.005 0.007 0.010 0.014 0.016 0.022 0.021 0.026 0.042 0.051 0.066 0.075 0.021 0.021 0.042 0.040 0.064 0.058 0.020 0.016 0.041 0.031 0.062 0.046 0.002 0.002 0.004 0.003 0.007 0.005 0.072 0.048 0.149 0.084 0.229 0.108h0c0.024 0.007 0.049 0.013 0.074 0.018 0.003 0.001 0.006 0.002 0.009 0.002 0.023 0.005 0.046 0.008 0.069 0.010 0.005 0.001 0.010 0.002 0.015 0.002 0.028 0.003 0.056 0.004 0.084 0.004s0.056-0.001 0.084-0.004c0.004-0 0.007-0.001 0.011-0.002 0.025-0.003 0.049-0.006 0.073-0.011 0-0 0.001-0 0.001-0l6.288-1.258c0.469-0.094 0.773-0.55 0.679-1.019s-0.55-0.773-1.019-0.679l-3.035 0.607c-0.134 0.027-0.222-0.137-0.125-0.234l7.416-7.416c0.337-0.337 0.362-0.89 0.032-1.233-0.337-0.35-0.894-0.353-1.236-0.012l-7.436 7.436c-0.097 0.097-0.261 0.009-0.234-0.125l0.607-3.035c0.094-0.469-0.21-0.925-0.679-1.019s-0.925 0.21-1.019 0.679l-1.258 6.288c-0 0-0 0-0 0.001-0.006 0.033-0.011 0.065-0.013 0.098-0.001 0.009-0.001 0.018-0.001 0.027z"/>
</g>
    </svg>
  )
}

export default ConcentricIcon

