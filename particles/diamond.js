import React from 'react'

const DiamondIcon = (props) => {
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
<path d="M29.999 8.429l-3.079-6.159c-0.153-0.305-0.464-0.498-0.805-0.498h-0.195c-0.092-0.014-0.186-0.014-0.277 0h-9.508c-0.044-0.007-0.088-0.011-0.134-0.011s-0.090 0.005-0.134 0.011h-9.508c-0.091-0.014-0.184-0.014-0.277 0h-0.196c-0.341 0-0.653 0.193-0.805 0.498l-3.079 6.159c-0.142 0.284-0.124 0.621 0.047 0.888l13.194 20.615c0.177 0.277 0.468 0.415 0.758 0.415s0.581-0.138 0.758-0.415l13.193-20.615c0.171-0.267 0.189-0.604 0.047-0.888zM27.316 7.986h-3.692c-0.225 0-0.356-0.255-0.225-0.438l2.172-3.041c0.121-0.17 0.38-0.15 0.473 0.037l1.52 3.041c0.092 0.184-0.042 0.401-0.248 0.401zM20.079 10.134l-3.811 14.61c-0.072 0.276-0.464 0.276-0.536 0l-3.811-14.61c-0.046-0.175 0.087-0.347 0.268-0.347h7.623c0.181 0 0.314 0.171 0.268 0.347zM13.014 7.528l2.775-3.238c0.111-0.129 0.31-0.129 0.421 0l2.775 3.238c0.154 0.18 0.026 0.457-0.21 0.457h-5.55c-0.237 0-0.364-0.278-0.21-0.457zM18.57 3.573h4.916c0.225 0 0.356 0.255 0.225 0.438l-2.234 3.128c-0.105 0.146-0.319 0.156-0.436 0.019l-2.681-3.128c-0.154-0.18-0.026-0.457 0.21-0.457zM10.524 7.14l-2.234-3.128c-0.131-0.183 0-0.438 0.225-0.438h4.916c0.237 0 0.364 0.278 0.21 0.457l-2.681 3.128c-0.117 0.137-0.331 0.127-0.436-0.019zM12.798 22.773l-8.038-12.56c-0.118-0.184 0.014-0.426 0.233-0.426h4.762c0.126 0 0.236 0.085 0.268 0.207l3.276 12.56c0.080 0.305-0.331 0.485-0.501 0.219zM22.245 9.787h4.762c0.219 0 0.351 0.242 0.233 0.426l-8.038 12.56c-0.17 0.266-0.581 0.086-0.501-0.219l3.277-12.56c0.032-0.122 0.142-0.207 0.268-0.207zM6.43 4.507l2.172 3.041c0.131 0.183-0 0.438-0.225 0.438h-3.692c-0.206 0-0.34-0.217-0.248-0.401l1.52-3.041c0.093-0.187 0.352-0.207 0.473-0.037z"/>
</g>
    </svg>
  )
}

export default DiamondIcon

