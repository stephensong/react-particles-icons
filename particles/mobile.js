import React from 'react'

const MobileIcon = (props) => {
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
<path d="M21.758 1.772h-11.515c-0.995 0-1.801 0.806-1.801 1.801v24.853c0 0.995 0.806 1.801 1.801 1.801h11.515c0.995 0 1.801-0.806 1.801-1.801v-24.853c0-0.995-0.806-1.801-1.801-1.801zM20.857 24.892h-9.714c-0.497 0-0.9-0.403-0.9-0.9v-15.983c0-0.497 0.403-0.9 0.9-0.9h9.714c0.497 0 0.9 0.403 0.9 0.9v15.983c0 0.497-0.403 0.9-0.9 0.9zM15.012 27.56c0-0.497 0.403-0.9 0.9-0.9h0.176c0.497 0 0.9 0.403 0.9 0.9 0 0.414-0.279 0.761-0.659 0.867-0.077 0.021-0.157 0.034-0.241 0.034h-0.176c-0.084 0-0.164-0.012-0.241-0.034-0.38-0.105-0.659-0.453-0.659-0.867zM19.568 4.44c0 0.497-0.403 0.9-0.9 0.9h-5.335c-0.497 0-0.9-0.403-0.9-0.9 0-0.414 0.279-0.761 0.659-0.867 0.077-0.021 0.158-0.034 0.241-0.034h5.335c0.084 0 0.164 0.012 0.241 0.034 0.38 0.106 0.659 0.453 0.659 0.867z"/>
</g>
    </svg>
  )
}

export default MobileIcon

