import React from 'react'
import ReactPlayer from 'react-player';

const Live = () => {
  return (
    <div className='container'>
      <div id="day_1" className='mt-3'>
        <h3 className='fs-16'>Day 1 - 1st September 2025</h3>
        <hr />
        <p className='fs-14'>
          Chief Celebrant : <b>H.G.DR. Yuhanon Mar Demetrios</b>
          <br />
          Live from : <b>7:30 am</b>
        </p>
      </div>
      <div className='mb-2'>
        <ReactPlayer src="https://www.youtube.com/live/sJCJ1nWynA8?si=tNkOXHyd30nULncO" width={'100%'} height={'100%'} autoPlay controls></ReactPlayer>
      </div>
    </div>
  )
}

export default Live