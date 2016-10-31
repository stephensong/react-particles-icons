import React from 'react'

const WordpressFullIcon = (props) => {
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
<path d="M27.157 1.801h-22.313c-1.681 0-3.043 1.362-3.043 3.043v22.313c0 1.68 1.362 3.043 3.043 3.043h22.313c1.68 0 3.043-1.362 3.043-3.043v-22.313c0-1.68-1.362-3.043-3.043-3.043v0zM25.714 15.985c0 5.323-4.334 9.655-9.659 9.655-5.328 0-9.662-4.332-9.662-9.655 0-5.324 4.334-9.654 9.662-9.654 5.325 0 9.659 4.33 9.659 9.654zM24.654 16.014c0-0.89-0.138-1.752-0.388-2.56l-3.84 9.959c2.529-1.496 4.227-4.249 4.227-7.399h0zM13.337 24.161c0.855 0.287 1.77 0.441 2.723 0.441 0.996 0 1.95-0.168 2.839-0.48l-2.623-6.797-2.938 6.836zM7.815 13.586c-0.227 0.77-0.351 1.584-0.351 2.428 0 3.219 1.773 6.023 4.394 7.493l-4.016-9.867-0.026-0.054zM12.194 13.032l-0.369-0.017c-0.805-0.013-0.716 0.822-0.716 0.822l2.858 7.163 1.921-4.586-1.072-2.729c-0.429-0.722-1.477-0.714-1.477-0.714v-0.38h6.009l-0.009 0.422-0.625 0.039c-0.779 0-0.621 0.74-0.621 0.74l2.607 6.961 0.747-1.927c1.326-3.004 0.508-5.227 0.508-5.227-1.328-2.73 0.35-3.121 0.35-3.121 0.106-0.015 0.206-0.024 0.303-0.028-1.576-1.851-3.925-3.026-6.546-3.026-3.545 0-6.59 2.147-7.903 5.21l4.022-0.041 0.014 0.44 0-0z"/>
</g>
    </svg>
  )
}

export default WordpressFullIcon

