import React from 'react'

const Close = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}>
    <defs>
      <polygon
        id="ic_clear-a"
        points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"
      />
      <rect id="ic_clear-c" width="50" height="50" />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(-5 -5)">
      <mask id="ic_clear-b" fill="#fff">
        <use xlinkHref="#ic_clear-a" />
      </mask>
      <g mask="url(#ic_clear-b)">
        <g transform="translate(-13 -13)">
          <use fill="#fff" xlinkHref="#ic_clear-c" />
        </g>
      </g>
    </g>
  </svg>
)

export { Close as default }
