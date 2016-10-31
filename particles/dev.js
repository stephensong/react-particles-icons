import React from 'react'

const DevIcon = (props) => {
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
<path d="M27.139 9.259c-0.101-0.079-0.203-0.156-0.308-0.23s-0.211-0.146-0.319-0.216c-0.054-0.035-0.109-0.069-0.164-0.102-0.11-0.067-0.222-0.131-0.335-0.193s-0.228-0.121-0.345-0.177c-0.175-0.084-0.353-0.162-0.535-0.234-0.121-0.048-0.244-0.093-0.368-0.135s-0.249-0.081-0.376-0.117c-0.127-0.036-0.254-0.069-0.384-0.099s-0.259-0.056-0.391-0.080c-0.263-0.047-0.53-0.081-0.801-0.102-0.068-0.005-0.136-0.010-0.204-0.013-0.136-0.007-0.274-0.010-0.412-0.010-0.102 0-0.203 0.002-0.303 0.006s-0.201 0.009-0.301 0.017c-0.199 0.015-0.397 0.037-0.592 0.066-0.39 0.059-0.771 0.145-1.14 0.258-0.024 0.007-0.048 0.015-0.072 0.022-0.136 0.043-0.282-0.024-0.338-0.155-1.074-2.526-3.567-4.319-6.464-4.359-3.984-0.055-7.23 3.157-7.23 7.128 0 1.246 0.32 2.418 0.883 3.437 0.195 0.354 0.088 0.797-0.239 1.033-2.788 2.014-4.604 5.292-4.604 8.995 0 3.062 5.545 4.593 11.089 4.593s11.089-1.531 11.089-4.593c0-0.148-0.015-0.572-0.019-0.637v0c0 0 0.195-0.049 0.401-0.105 0.124-0.034 0.251-0.070 0.342-0.1 0.243-0.080 0.48-0.171 0.712-0.273 0.045-0.020 0.090-0.040 0.134-0.060 0.334-0.154 0.657-0.331 0.964-0.528 0.076-0.049 0.151-0.1 0.226-0.151 0.062-0.043 0.123-0.086 0.183-0.13 0.044-0.032 0.088-0.065 0.132-0.099 0.233-0.178 0.455-0.367 0.667-0.569 0.093-0.088 0.183-0.179 0.271-0.271 0.055-0.058 0.11-0.117 0.163-0.176 0.107-0.119 0.21-0.241 0.31-0.367 0.050-0.063 0.099-0.126 0.147-0.19 0.077-0.103 0.151-0.207 0.223-0.314 0.036-0.053 0.071-0.107 0.106-0.161 0.069-0.108 0.136-0.218 0.201-0.33 0.675-1.173 1.060-2.533 1.060-3.983 0-2.555-1.198-4.831-3.062-6.296zM7.373 10.208c0.034-0.572 0.647-0.919 1.159-0.662v0l1.463 0.731c0.309 0.154 0.682 0.094 0.926-0.15l2.295-2.295c0.27-0.27 0.694-0.312 1.012-0.1l1.503 1.002c0.206 0.137 0.464 0.172 0.699 0.094l0.772-0.257c0.289-0.096 0.59-0.018 0.797 0.174 0.017-0.011 0.034-0.022 0.051-0.032-0.017 0.010-0.034 0.021-0.051 0.032-0.147 0.091-0.291 0.186-0.432 0.286-0.105 0.074-0.207 0.151-0.308 0.23-0.151 0.119-0.298 0.243-0.44 0.372-0.189 0.172-0.371 0.353-0.543 0.543-0.129 0.142-0.253 0.289-0.372 0.44-0.079 0.101-0.156 0.204-0.23 0.308-0.112 0.157-0.218 0.318-0.318 0.483-0.134 0.22-0.257 0.447-0.369 0.68-0.056 0.117-0.11 0.235-0.16 0.354-0.202 0.479-0.36 0.981-0.466 1.502-0.027 0.13-0.050 0.262-0.070 0.394-0.061 0.397-0.092 0.804-0.092 1.219 0 0.040 0 0.081 0.001 0.121 0.002 0.133-0.092 0.249-0.222 0.276-0.351 0.070-0.715 0.108-1.086 0.108-1.179 0-2.273-0.372-3.171-1.003-0.482-0.339-0.907-0.752-1.259-1.224-0.687-0.921-1.095-2.062-1.095-3.297 0-0.11 0.003-0.219 0.010-0.327zM21.921 24.845v0c-0.42 0.398-1.099 0.777-1.964 1.095-1.811 0.667-4.388 1.050-7.069 1.050s-5.258-0.383-7.069-1.050c-0.864-0.318-1.543-0.697-1.964-1.095-0.405-0.383-0.452-0.666-0.452-0.845 0-2.534 0.987-4.915 2.778-6.707 0.43-0.43 0.894-0.814 1.387-1.148 0.289-0.196 0.672-0.194 0.948 0.020 1.207 0.939 2.724 1.498 4.372 1.498 0.442 0 0.875-0.041 1.295-0.118 0.14-0.026 0.277 0.059 0.316 0.196 0.090 0.318 0.199 0.628 0.326 0.928 0.051 0.12 0.104 0.238 0.16 0.355 0.084 0.175 0.175 0.346 0.271 0.514 0.129 0.225 0.27 0.444 0.42 0.654 0.1 0.14 0.205 0.278 0.313 0.411 0.163 0.2 0.336 0.393 0.517 0.576 0.121 0.122 0.246 0.241 0.374 0.355 0.064 0.057 0.129 0.113 0.196 0.169 0.174 0.145 0.353 0.282 0.539 0.412 0.093 0.065 0.187 0.128 0.282 0.189s0.192 0.12 0.291 0.177 0.198 0.112 0.299 0.165c0.050 0.026 0.101 0.052 0.152 0.078 0.134 0.067 0.27 0.13 0.408 0.189 0.207 0.089 0.419 0.169 0.635 0.241 0.099 0.033 0.199 0.064 0.299 0.093 0.176 0.051 0.355 0.095 0.535 0.134 0.068 0.014 0.136 0.028 0.204 0.041 0.060 0.011 0.12 0.022 0.18 0.032 0.422 0.069 0.856 0.105 1.298 0.105h0.002c0.091 0 0.166 0.073 0.168 0.164 0.003 0.092 0.004 0.185 0.004 0.278 0 0.179-0.047 0.462-0.452 0.845zM23.709 21.571c-0.484 0.122-0.99 0.186-1.511 0.186-0.031 0-0.061-0.001-0.092-0.001-2.925-0.043-5.366-2.12-5.968-4.877-0.093-0.427-0.143-0.87-0.143-1.324 0-0.158 0.006-0.314 0.018-0.469 0.135-1.803 1.045-3.393 2.396-4.438 0.472-0.366 0.999-0.664 1.565-0.883 0.691-0.266 1.44-0.413 2.224-0.413 3.42 0 6.202 2.782 6.202 6.202-0 2.899-2 5.339-4.692 6.016z"/>
<path d="M20.030 12.139c-0.414-0.276-0.973-0.164-1.249 0.25l-1.727 2.591c-0.233 0.35-0.233 0.802 0 1.152l1.727 2.591c0.174 0.26 0.459 0.401 0.75 0.401 0.172 0 0.345-0.049 0.499-0.151 0.414-0.276 0.526-0.835 0.25-1.249l-1.445-2.168 1.445-2.168c0.276-0.414 0.164-0.973-0.25-1.249z"/>
<path d="M24.367 12.139c-0.414 0.276-0.526 0.835-0.25 1.249l1.445 2.168-1.445 2.168c-0.276 0.414-0.164 0.973 0.25 1.249 0.154 0.102 0.327 0.151 0.499 0.151 0.291 0 0.576-0.141 0.75-0.401l1.727-2.591c0.233-0.35 0.233-0.802-0-1.152l-1.727-2.591c-0.276-0.414-0.835-0.526-1.249-0.25z"/>
<path d="M22.755 11.105c-0.493-0.061-0.943 0.288-1.005 0.782l-0.889 7.114c-0.062 0.493 0.288 0.943 0.782 1.005 0.038 0.005 0.076 0.007 0.113 0.007 0.448 0 0.835-0.333 0.892-0.789l0.889-7.114c0.062-0.493-0.288-0.943-0.782-1.005z"/>
</g>
    </svg>
  )
}

export default DevIcon

