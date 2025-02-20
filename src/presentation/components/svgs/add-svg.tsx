import React, { SVGProps } from 'react'

const AddSVG: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.91915 5.13223H12V6.89256H6.91915V12H5.08085V6.89256H0V5.13223H5.08085V0H6.91915V5.13223Z" fill="#834825"/>
    </svg>
  )
}

export default AddSVG