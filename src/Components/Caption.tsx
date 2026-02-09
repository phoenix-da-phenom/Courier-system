

import type { CaptionProps } from "../Lib/data"

export default function Caption({title}:CaptionProps) {
  return (
    <div>
        <h1 className='text-3xl font-semibold'>{title}</h1>


    </div>
  )
}
