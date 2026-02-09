
import type { captionProps } from '../Lib/data'

export default function Caption({title}:captionProps) {
  return (
    <div>
        <h1 className='text-3xl font-semibold'>{title}</h1>


    </div>
  )
}
