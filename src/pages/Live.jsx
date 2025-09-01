import React from 'react'
import ReactPlayer from 'react-player';

const Live = () => {
  return (
    <div className='container'>
      <div id="day_1" className='mt-3'>
        <h3 className='fs-16'>Day 2 - 2nd September 2025</h3>
        <hr />
        <p className='fs-14'>
          Chief Celebrant : <b className='malayalam-font'>അഭി.ഡോ. എബ്രഹാം മാർ സെറാഫിം</b>
          <br />
          Live from : <b>7:30 am</b>
        </p>
      </div>
      <div className='mb-2'>
        <ReactPlayer src="https://www.youtube.com/live/YFXaMxYhEIE?si=tjgU2UeNxFBqOFSK" width={'100%'} height={'100%'} autoPlay controls></ReactPlayer>
      </div>
    </div>
  )
}

export default Live