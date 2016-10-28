import React from 'react';

const AmericaIcon = (props) => {
  const computedSize = props.size || '1em';
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
<path d="M16 3.551c-6.875 0-12.449 5.574-12.449 12.449s5.574 12.449 12.449 12.449c6.875 0 12.449-5.574 12.449-12.449s-5.574-12.449-12.449-12.449zM5.352 16.049c-0.012-2.685 0.963-5.221 2.754-7.195 0.029-0.031 0.065-0.046 0.101-0.046 0.072 0 0.142 0.056 0.14 0.142-0.005 0.202-0.016 0.404-0.017 0.601-0 0.028-0.008 0.055-0.025 0.078-0.363 0.518-0.959 1.062-1.089 1.701-0.117 0.574 0.19 1.235 0.369 1.896 0.017 0.063 0.074 0.102 0.134 0.102 0.026 0 0.052-0.007 0.076-0.023 0.044-0.029 0.082-0.054 0.116-0.075 0.023-0.015 0.050-0.023 0.076-0.023 0.047 0 0.092 0.023 0.118 0.067 0.358 0.6 0.828 1.137 0.915 1.73 0.141 0.959 0.831 1.169 1.474 1.308 0.87 0.189 1.6 0.448 2.093 1.241 0.032 0.051 0.074 0.096 0.122 0.136 0.036 0.030 0.055 0.076 0.050 0.123-0.017 0.148-0.039 0.295-0.093 0.417-0.597 1.365-0.327 3.029 0.843 3.826 0.788 0.537 0.945 1.152 1.012 2.034 0.059 0.773 0.16 1.544 0.288 2.312 0.014 0.085-0.052 0.162-0.135 0.162-0.006 0-0.011-0-0.017-0.001-2.412-0.302-4.636-1.415-6.35-3.205-1.88-1.964-2.939-4.59-2.951-7.309zM16.515 5.509l-0.002 0.025c-0.005 0.059-0.047 0.107-0.103 0.122-0.39 0.106-0.783 0.276-1.167 0.276-0.023 0-0.046-0.001-0.069-0.002-0.457-0.026-0.912-0.074-1.367-0.129-0.127-0.015-0.135-0.197-0.010-0.223l0.006-0.001c0.193 0.082 0.387 0.145 0.585 0.145 0.222 0 0.449-0.079 0.685-0.299 0.023-0.022 0.053-0.036 0.085-0.038 0.278-0.022 0.559-0.033 0.841-0.033 0.128 0 0.256 0.002 0.383 0.007 0.079 0.003 0.139 0.072 0.132 0.15zM9.356 11.211c0.14-0.171 0.284-0.349 0.424-0.548 0.226-0.323 0.347-0.702 0.35-1.098 0.001-0.066 0.003-0.139 0.005-0.215 0.684-0.605 1.447-1.094 2.264-1.457 0.171-0.076 0.367 0.017 0.426 0.194 0.101 0.305 0.278 0.584 0.52 0.807l1.005 0.925c0.127 0.117 0.135 0.312 0.023 0.442-0.106 0.123-0.21 0.252-0.312 0.387-0.169 0.225-0.354 0.502-0.539 0.796-0.069 0.11-0.199 0.168-0.327 0.142-0.148-0.030-0.3-0.045-0.453-0.045-0.152 0-0.306 0.015-0.459 0.045-0.803 0.156-1.768 0.639-2.217 0.882-0.146 0.079-0.33 0.030-0.415-0.112-0.001-0.001-0.001-0.002-0.001-0.002-0.091-0.153-0.288-0.349-0.441-0.492-0.12-0.112-0.134-0.297-0.033-0.426 0.061-0.078 0.126-0.158 0.18-0.223zM14.52 20.568c-0.388-0.264-0.481-0.989-0.207-1.616 0.036-0.083 0.067-0.165 0.093-0.245 0.052-0.16 0.232-0.237 0.384-0.165 0.051 0.024 0.1 0.047 0.144 0.069 0.17 0.081 0.345 0.165 0.536 0.246 0.174 0.074 0.362 0.169 0.595 0.301 0.052 0.029 0.091 0.075 0.116 0.129 0.308 0.672 0.782 1.077 1.176 1.314 0.313 0.189 0.629 0.306 0.927 0.389 0.145 0.040 0.233 0.188 0.196 0.333-0.053 0.21-1.249 1.906-1.42 2.283-0.022 0.048-0.045 0.098-0.058 0.124-0.057 0.113-0.106 0.225-0.149 0.332s-0.148 0.176-0.264 0.174v0c-0.144-0.003-0.262-0.114-0.273-0.257-0.001-0.009-0.001-0.018-0.002-0.026-0.039-0.518-0.116-1.129-0.384-1.737-0.292-0.662-0.754-1.202-1.41-1.649zM17.473 26.546c-0.090 0-0.157-0.088-0.131-0.177 0.031-0.105 0.064-0.214 0.106-0.314 0.007 0 0.014 0 0.021 0 0.813 0 0.826-0.888 1.141-1.514 0.14-0.277 0.281-0.701 0.503-0.764 0.897-0.251 0.99-0.914 1.053-1.661 0.025-0.294 0.115-0.61 0.266-0.861 0.653-1.083 0.455-1.54-0.854-1.826-0.809-0.177-1.692-0.205-1.885-1.306-0.030-0.172-0.356-0.308-0.562-0.429-0.31-0.182-0.626-0.354-0.956-0.495-0.591-0.252-1.184-0.623-1.796-0.666-0.024-0.002-0.048-0.003-0.072-0.003-0.392 0-0.845 0.213-1.195 0.47-0.025 0.018-0.053 0.027-0.080 0.027-0.058 0-0.115-0.038-0.132-0.101-0.039-0.14-0.078-0.283-0.119-0.431-0.158-0.038-0.406-0.097-0.653-0.157 0.061-0.277 0.113-0.513 0.18-0.82 0.021-0.095-0.055-0.17-0.137-0.17-0.030 0-0.060 0.010-0.088 0.032-0.117 0.096-0.197 0.16-0.289 0.198-0.222 0.094-0.505 0.255-0.705 0.255-0.042 0-0.079-0.007-0.113-0.023-0.22-0.106-0.401-0.49-0.427-0.769-0.084-0.889 0.556-1.395 2.076-1.691 0.040-0.008 0.079-0.012 0.115-0.012 0.54 0 0.678 0.809 1.015 0.965 0.017 0.008 0.034 0.011 0.051 0.011 0.042 0 0.084-0.022 0.11-0.058 0.244-0.346 1.061-1.836 1.582-2.529 0.523-0.696 1.325-1.427 2.354-1.427 0.057 0 0.115 0.002 0.173 0.007 0.003 0 0.006 0 0.009 0 0.070 0 0.124-0.063 0.111-0.133-0.044-0.235-0.089-0.47-0.128-0.68-0.011-0.059 0.025-0.116 0.083-0.13 0.561-0.142 1.117-0.283 1.632-0.413 0.068-0.017 0.102-0.091 0.073-0.154-0.22-0.467-0.391-0.83-0.561-1.192-0.019-0.041-0.060-0.065-0.102-0.065-0.015 0-0.030 0.003-0.044 0.009-0.080 0.034-0.165 0.070-0.223 0.095-0.014 0.006-0.029 0.009-0.043 0.009-0.024 0-0.048-0.008-0.068-0.024-0.325-0.26-0.57-0.577-0.821-0.58-0.001 0-0.003 0-0.004 0-0.249 0-0.54 0.323-0.746 0.561-0.386 0.447-0.735 0.926-1.007 1.282-0.023 0.030-0.057 0.045-0.091 0.045-0.028 0-0.056-0.010-0.079-0.031-0.508-0.468-0.942-0.868-1.454-1.339-0.058-0.054-0.046-0.149 0.024-0.187 0.802-0.432 1.527-0.822 2.299-1.238 0.059-0.032 0.079-0.107 0.043-0.164-0.086-0.135-0.166-0.262-0.244-0.385-0.059-0.093 0.010-0.213 0.117-0.213 0.004 0 0.007 0 0.011 0 0.803 0.061 1.588 0.211 2.344 0.445 0.036 0.061 0.059 0.099 0.095 0.16l-0.035 0.181c-0.214 0.069-0.427 0.138-0.78 0.252 0.233 0.252 0.419 0.342 0.579 0.342 0.393 0 0.624-0.546 0.999-0.546 0.063 0 0.129 0.015 0.201 0.051-0.015-0.023-0.030-0.045-0.045-0.067 1.237 0.527 2.375 1.292 3.355 2.272 0.631 0.631 1.173 1.328 1.62 2.075 0.025 0.042 0 0.097-0.047 0.105-0.191 0.033-0.461 0.049-0.83 0.063-0.081 0.003-0.143 0.073-0.135 0.154 0.035 0.368 0.030 0.751 0.189 1.044 0.033 0.061 0.155 0.082 0.307 0.082 0.195 0 0.441-0.035 0.615-0.066 0.099-0.018 0.249-0.21 0.336-0.333 0.014-0.020 0.035-0.029 0.056-0.029 0.026 0 0.051 0.014 0.064 0.041 0.063 0.139 0.123 0.279 0.18 0.42 0.033 0.083-0.021 0.175-0.11 0.188-0.578 0.080-1.183 0.161-1.434 0.495-0.747 0.996-1.944 1.702-1.853 3.345 0.085 1.544 0.715 2.547 2.141 2.547 0.103 0 0.211-0.005 0.323-0.016 0.26-0.025 0.544-0.189 0.78-0.189 0.043 0 0.084 0.005 0.123 0.018 0.117 0.038 0.24 0.078 0.363 0.121 0.068 0.024 0.106 0.096 0.088 0.165-0.471 1.812-1.417 3.473-2.775 4.831-1.655 1.655-3.759 2.698-6.037 3.015-0.007 0.001-0.013 0.001-0.019 0.001zM24.866 16c0 0.253-0.011 0.504-0.031 0.754-0.027 0.009-0.054 0.018-0.078 0.026-0.016 0.005-0.035 0.012-0.052 0.017-0.026 0.001-0.051 0.002-0.075 0.002-0.086 0-0.138-0.009-0.163-0.015-0.036-0.057-0.15-0.277-0.18-0.83-0.002-0.040-0.003-0.078-0.002-0.115 0.013-0.373 0.574-0.359 0.58 0.014 0.001 0.049 0.001 0.098 0.001 0.147z"/>
</g>
    </svg>
  );
}

export default AmericaIcon;
