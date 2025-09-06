import React from 'react'
import ReactPlayer from 'react-player';

const Live = () => {
  // const liveData = [
  //   {
  //     "name" : 'അഭി. ഡോ. യൂഹാനോൻ മാർ ദിമെത്രിയോസ്',
  //     "date" : 'Day 1',
  //     "url"  : 'https://www.youtube.com/live/sJCJ1nWynA8?si=PrjM7YWcaEQ42IRu'
  //   },
  //   {
  //     "name" : 'അഭി.ഡോ. എബ്രഹാം മാർ സെറാഫിം',
  //     "date" : 'Day 2',
  //     "url"  : 'https://www.youtube.com/live/YFXaMxYhEIE?si=Z7msl0MJZGSadBLA'
  //   }
    // {
    //   "name" : 'അഭി.ഡോ.ജോസഫ് മാർ ദീവന്നാസിയോസ്',
    //   "date" : 'Day 3',
    //   "url"  : 'https://www.youtube.com/live/duJE-QjpMDc?si=O6JK-DUVAzKVAS7B'
    // },
    // {
    //   "name" : 'അഭി. എബ്രഹാം മാർ എപ്പിഫാനിയോസ്',
    //   "date" : 'Day 4',
    //   "url"  : 'https://www.youtube.com/live/Amhl09sE_K8?si=xTsc1lGGIjVy_ncr'
    // },
    // {
    //   "name" : 'ഡോ. തോമസ് മാർ അത്താനാസിയോസ്',
    //   "date" : 'Day 5',
    //   "url"  : 'https://www.youtube.com/live/lPpWXnhksxk?si=SaBpeI2o2o8ZAyCL'
    // },
    // {
    //   "name" : 'പരി. കാതോലിക്കാ ബാവ',
    //   "date" : 'Day 6',
    //   "url"  : 'https://www.youtube.com/live/qi-4AzBlbEM?si=VhwmSPm6xhZarnkC'
    // },
    // {
    //   "name" : 'അഭി.ഡോ.യാക്കോബ് മാർ ഐറേനിയസ്',
    //   "date" : 'Day 7',
    //   "url"  : 'https://www.youtube.com/live/P0Ceuw4DsEU?si=dvTNgex2ZVt2mc87'
    // }
  // ]
  return (
    <div className='container'>
      <div id="day_1" className='my-3'>
        <h3 className='fs-16'>Day 7 - 7th September 2025</h3>
        <hr />
        <p className='fs-14'>
          Chief celebrant : <b className='malayalam-font'>അഭി.ഡോ.യാക്കോബ് മാർ ഐറേനിയസ്</b>
          <br />
          Live from : 7:30 am
        </p>
      </div>
      <div className='mb-2'>
        <ReactPlayer src="https://www.youtube.com/live/P0Ceuw4DsEU?si=dvTNgex2ZVt2mc87" width={'100%'} height={'350px'} autoPlay controls></ReactPlayer>
      </div>
      {/* <div className="row gap-3 mb-3 justify-content-center">
        {
          liveData.map((user, id)=>(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
              <div className="card" style={{minHeight:'350px'}}>
                <div className="image-wrapper">
                  <ReactPlayer src={user?.url} width={'100%'} height={'auto'} controls></ReactPlayer>
                </div>
                <div className="card-body text-center">
                  <p className='fs-14'>{user?.date}</p>
                  <h3 className='fs-14'>Chief celebrant: <span className="malayalam-font">{user?.name}</span></h3>
                </div>
              </div>
            </div>
          ))
        }
      </div> */}
    </div>
  )
}

export default Live