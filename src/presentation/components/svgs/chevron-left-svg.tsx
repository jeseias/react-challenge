import React, { SVGProps } from 'react'

const ChevronLeftSVG: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22.4523 10.2357C22.1423 9.92138 21.6351 9.92143 21.3253 10.2358L14.1108 17.5554L14.1073 17.5519L13 18.6759L13.0032 18.6791L13 18.6824L14.1113 19.8094L14.1143 19.8064L21.2981 27.0943C21.607 27.4077 22.1126 27.4077 22.4214 27.0943C22.724 26.7872 22.724 26.2941 22.4214 25.987L15.2219 18.6827L22.4524 11.3468C22.7561 11.0387 22.756 10.5438 22.4523 10.2357Z" fill="#333438"/>
    </svg>
  )
}

export default ChevronLeftSVG