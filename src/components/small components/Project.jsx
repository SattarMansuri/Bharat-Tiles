import React from 'react'
import './small-comp.css'
import Featured from '../Featured Component/Featured'


const Project = () => {
  return (
    <section>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className='project'>
        <Featured name={'Fabien Charuau'} design={'Les Bouchons'} publish={'Featured in Time magazine, Nov 2021'} flexDirection={'column-reverse'} />
      </div>
    </section>
  )
}

export default Project