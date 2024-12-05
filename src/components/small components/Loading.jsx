import React from 'react'
import { FadeLoader } from 'react-spinners'

const Loading = ({ load }) => {
  return (
    <div className='loading'>
      <FadeLoader Loading={load} />
    </div>
  )
}

export default Loading