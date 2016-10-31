import React from 'react'

const SpeakerIcon = (props) => {
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
<path d="M24.87 1.772h-17.739c-0.995 0-1.801 0.806-1.801 1.801v24.853c0 0.995 0.806 1.801 1.801 1.801h17.74c0.995 0 1.801-0.806 1.801-1.801v-24.853c-0-0.995-0.806-1.801-1.801-1.801zM23.969 28.427h-15.939c-0.497 0-0.9-0.403-0.9-0.9v-23.052c0-0.497 0.403-0.9 0.9-0.9h15.939c0.497 0 0.9 0.403 0.9 0.9v23.052c-0 0.497-0.403 0.9-0.901 0.9z"/>
<path d="M10.665 26.226c0 0.737-0.597 1.334-1.334 1.334s-1.334-0.597-1.334-1.334c0-0.737 0.597-1.334 1.334-1.334s1.334 0.597 1.334 1.334z"/>
<path d="M24.003 26.226c0 0.737-0.597 1.334-1.334 1.334s-1.334-0.597-1.334-1.334c0-0.737 0.597-1.334 1.334-1.334s1.334 0.597 1.334 1.334z"/>
<path d="M10.665 5.774c0 0.737-0.597 1.334-1.334 1.334s-1.334-0.597-1.334-1.334c0-0.737 0.597-1.334 1.334-1.334s1.334 0.597 1.334 1.334z"/>
<path d="M24.003 5.774c0 0.737-0.597 1.334-1.334 1.334s-1.334-0.597-1.334-1.334c0-0.737 0.597-1.334 1.334-1.334s1.334 0.597 1.334 1.334z"/>
<path d="M16 26.682c3.438 0 6.236-2.797 6.236-6.236s-2.797-6.236-6.236-6.236c-3.438 0-6.236 2.797-6.236 6.236s2.797 6.236 6.236 6.236zM16 16.011c2.445 0 4.435 1.989 4.435 4.435s-1.99 4.435-4.435 4.435c-2.445 0-4.435-1.99-4.435-4.435s1.989-4.435 4.435-4.435z"/>
<path d="M19.557 20.446c0 1.964-1.592 3.557-3.557 3.557s-3.557-1.592-3.557-3.557c0-1.964 1.592-3.557 3.557-3.557s3.557 1.592 3.557 3.557z"/>
<path d="M16 12.443c1.964 0 3.557-1.592 3.557-3.557s-1.592-3.557-3.557-3.557-3.557 1.592-3.557 3.557 1.592 3.557 3.557 3.557zM16 7.13c0.968 0 1.756 0.788 1.756 1.756s-0.788 1.756-1.756 1.756-1.756-0.788-1.756-1.756 0.788-1.756 1.756-1.756z"/>
</g>
    </svg>
  )
}

export default SpeakerIcon

