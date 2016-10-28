import React from 'react';

const CinoIcon = (props) => {
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
<path d="M26.423 7.29s-1.080-2.234-1.544-2.916c-1.766-2.596-6.298-2.607-8.879-2.607s-8.003 0.9-8.879 2.607c-0.377 0.734-1.544 2.916-1.544 2.916-0.123 0.226-0.195 0.494-0.195 0.779 0 0.437 0.169 0.834 0.446 1.13 0.096 0.101 0.2 0.195 0.31 0.28 0.182 0.138 0.303 0.336 0.334 0.563l2.332 18.762c0.052 0.301 0.274 0.539 0.561 0.613l0.005 0.001c1.99 0.518 4.275 0.816 6.629 0.816s4.639-0.298 6.819-0.857l-0.189 0.041c0.293-0.075 0.515-0.313 0.566-0.609l2.332-18.762c0.031-0.231 0.152-0.429 0.326-0.561 0.119-0.091 0.223-0.185 0.319-0.285 0.277-0.296 0.446-0.693 0.446-1.13 0-0.285-0.072-0.554-0.199-0.788zM10.851 4.008c1.354-0.288 3.135-0.44 5.149-0.44s3.795 0.152 5.149 0.44c0.705 0.15 1.183 0.315 1.495 0.456 0.048 0.022 0.081 0.070 0.081 0.126 0 0.061-0.039 0.112-0.093 0.131-0.755 0.255-2.536 0.602-6.632 0.602s-5.876-0.348-6.631-0.602c-0.055-0.019-0.094-0.071-0.094-0.131 0-0.056 0.033-0.104 0.081-0.126 0.312-0.142 0.791-0.307 1.495-0.457zM8.14 6.297c0.024-0.044 0.069-0.074 0.122-0.074 0.021 0 0.041 0.005 0.059 0.013 0.623 0.296 1.321 0.427 1.67 0.492 1.41 0.263 3.431 0.396 6.008 0.396s4.599-0.133 6.008-0.396c0.35-0.065 1.048-0.196 1.671-0.492 0.017-0.008 0.037-0.013 0.058-0.013 0.053 0 0.098 0.030 0.122 0.073l0.867 1.638c0.010 0.019 0.016 0.041 0.016 0.065 0 0.047-0.024 0.089-0.060 0.114-0.857 0.595-3.654 1.36-8.683 1.36s-7.826-0.765-8.683-1.36c-0.036-0.025-0.060-0.067-0.060-0.114 0-0.024 0.006-0.046 0.017-0.066zM21.526 27.637c-0.015 0.118-0.102 0.212-0.215 0.237-1.598 0.355-3.431 0.558-5.311 0.558s-3.713-0.203-5.478-0.589c0.054 0.006-0.033-0.088-0.048-0.205l-0.556-4.476c-0.001-0.010-0.002-0.022-0.002-0.034 0-0.153 0.124-0.277 0.277-0.277 0.020 0 0.039 0.002 0.058 0.006 1.318 0.266 3.222 0.396 5.749 0.396 2.038 0 4.8-0.483 5.79-0.67 0.015-0.003 0.033-0.005 0.051-0.005 0.153 0 0.277 0.124 0.277 0.277 0 0.012-0.001 0.024-0.002 0.036zM23.109 14.906c-0.014 0.108-0.088 0.195-0.186 0.229q-0.227 0.075-0.476 0.144c-1.618 0.447-3.908 0.693-6.446 0.693s-4.828-0.246-6.446-0.693q-0.249-0.069-0.474-0.143c-0.101-0.034-0.175-0.121-0.188-0.228l-0.502-4.038c-0.001-0.010-0.002-0.022-0.002-0.034 0-0.153 0.124-0.277 0.277-0.277 0.024 0 0.047 0.003 0.070 0.009 2.599 0.639 5.962 0.708 7.266 0.708s4.666-0.069 7.268-0.708c0.020-0.005 0.044-0.008 0.068-0.008 0.153 0 0.277 0.124 0.277 0.277 0 0.012-0.001 0.024-0.002 0.036z"/>
</g>
    </svg>
  );
}

export default CinoIcon;
