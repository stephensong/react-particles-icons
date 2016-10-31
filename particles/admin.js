import React from 'react'

const AdminIcon = (props) => {
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
<path d="M23.017 13.626c0.641-1.165 1-2.507 0.986-3.934-0.044-4.323-3.566-7.858-7.889-7.918-4.472-0.062-8.117 3.544-8.117 8.002 0 1.399 0.359 2.715 0.991 3.859 0.219 0.397 0.099 0.894-0.269 1.16-3.13 2.261-5.168 5.941-5.168 10.098 0 3.438 6.225 5.157 12.449 5.157s12.449-1.719 12.449-5.157c0-4.157-2.038-7.837-5.168-10.098-0.371-0.268-0.485-0.768-0.264-1.168zM9.809 9.408c0.038-0.642 0.726-1.031 1.301-0.744l1.642 0.821c0.347 0.173 0.765 0.105 1.039-0.169l2.576-2.576c0.303-0.303 0.779-0.351 1.136-0.112l1.687 1.125c0.231 0.154 0.521 0.193 0.784 0.105l0.867-0.289c0.497-0.165 1.025 0.127 1.158 0.633 0.132 0.503 0.203 1.030 0.203 1.574 0 1.386-0.457 2.668-1.229 3.702-0.395 0.529-0.873 0.994-1.413 1.374-1.008 0.709-2.236 1.126-3.56 1.126s-2.552-0.417-3.56-1.126c-0.541-0.38-1.018-0.845-1.413-1.374-0.772-1.034-1.229-2.315-1.229-3.702-0-0.123 0.004-0.246 0.011-0.367zM5.859 25.84c-0.455-0.43-0.507-0.747-0.507-0.948 0-2.844 1.108-5.518 3.119-7.529 0.484-0.484 1.007-0.916 1.561-1.292 0.002-0.001 0.003-0.002 0.005-0.003 0.193-0.129 0.432 0.090 0.328 0.298l-1.395 2.789c-0.173 0.347-0.105 0.765 0.169 1.039l0.861 0.861c0.274 0.274 0.342 0.693 0.169 1.039l-0.309 0.617c-0.118 0.237-0.127 0.514-0.022 0.757l1.262 2.945c0.289 0.673-0.305 1.393-1.021 1.235-0.734-0.163-1.413-0.357-2.015-0.579-0.97-0.357-1.733-0.782-2.205-1.229zM13.593 27.661l-1.772-4.134c-0.104-0.243-0.096-0.521 0.022-0.757l0.516-1.031c0.173-0.347 0.105-0.765-0.169-1.039l-0.861-0.861c-0.274-0.274-0.342-0.693-0.169-1.039l0.604-1.208c0.212-0.424 0.716-0.61 1.153-0.427 0.361 0.15 0.735 0.275 1.121 0.372 0.11 0.028 0.183 0.128 0.182 0.241 0 0.001 0 0.001 0 0.002 0 0.622 0.32 1.526 0.804 2.106 0.058 0.069 0.074 0.163 0.041 0.247-0.027 0.068-0.045 0.139-0.055 0.214l-0.712 5.693c-0.047 0.379 0.149 0.746 0.491 0.917l0.806 0.403c0.254 0.127 0.552 0.127 0.805 0l0.806-0.403c0.341-0.171 0.538-0.538 0.491-0.917l-0.712-5.693c-0.009-0.075-0.028-0.147-0.055-0.214-0.033-0.084-0.016-0.178 0.041-0.247 0.484-0.579 0.804-1.483 0.804-2.106 0-0.001 0-0.001 0-0.002-0-0.113 0.073-0.214 0.183-0.241 0.385-0.097 0.76-0.222 1.121-0.372 0.437-0.182 0.941 0.003 1.153 0.427l0.604 1.208c0.173 0.347 0.105 0.765-0.169 1.039l-0.861 0.861c-0.274 0.274-0.342 0.693-0.169 1.039l0.516 1.031c0.118 0.237 0.127 0.514 0.022 0.757l-1.772 4.134c-0.135 0.315-0.437 0.527-0.78 0.545-0.535 0.028-1.079 0.042-1.627 0.042s-1.092-0.014-1.627-0.042c-0.343-0.018-0.645-0.23-0.78-0.545zM26.141 25.84c-0.472 0.447-1.234 0.872-2.205 1.229-0.603 0.222-1.281 0.416-2.015 0.579-0.715 0.159-1.309-0.561-1.021-1.235l1.262-2.945c0.104-0.243 0.096-0.521-0.022-0.757l-0.309-0.617c-0.173-0.347-0.105-0.765 0.169-1.039l0.861-0.861c0.274-0.274 0.342-0.693 0.169-1.039l-1.395-2.789c-0.104-0.208 0.135-0.427 0.328-0.298 0.002 0.001 0.003 0.002 0.005 0.003 0.554 0.376 1.077 0.808 1.561 1.292 2.011 2.011 3.119 4.685 3.119 7.529 0 0.201-0.053 0.518-0.507 0.948z"/>
</g>
    </svg>
  )
}

export default AdminIcon

