import React from 'react'
import './small-comp.css'
import Featured from '../featured component/Featured'


const Project = () => {
  return (
    <section className='project'>
      <Featured name={'Fabien Charuau'} design={'Les Bouchons'} publish={'Featured in Time magazine, Nov 2021'} flexDirection={'column-reverse'} />
    </section>
  )
}

export default Project