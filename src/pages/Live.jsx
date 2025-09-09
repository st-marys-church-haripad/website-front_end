import NoData from '@/components/shared/NoData'
import React from 'react'

const Live = () => {
  // const liveData = [
  //   {
  //     "name" : 'അഭി. ഡോ. യൂഹാനോൻ മാർ ദിമെത്രിയോസ്',
  //     "date" : 'Day 1',
  //     "id"  : 'sJCJ1nWynA8?si=W3qgnBN11zmKVsx9'
  //   },
  //   {
  //     "name" : 'അഭി.ഡോ. എബ്രഹാം മാർ സെറാഫിം',
  //     "date" : 'Day 2',
  //     "id"  : 'YFXaMxYhEIE?si=sE_yOlGLprVhEY2J'
  //   },
  //   {
  //     "name" : 'അഭി.ഡോ.ജോസഫ് മാർ ദീവന്നാസിയോസ്',
  //     "date" : 'Day 3',
  //     "id"  : 'duJE-QjpMDc?si=k380bRkDaIp1RfRQ'
  //   },
  //   {
  //     "name" : 'അഭി. എബ്രഹാം മാർ എപ്പിഫാനിയോസ്',
  //     "date" : 'Day 4',
  //     "id"  : 'Amhl09sE_K8?si=QxhXhj5lsAHCWIUk'
  //   },
  //   {
  //     "name" : 'ഡോ. തോമസ് മാർ അത്താനാസിയോസ്',
  //     "date" : 'Day 5',
  //     "id"  : 'lPpWXnhksxk?si=5gyxZG7w721Nv5pC'
  //   },
  //   {
  //     "name" : 'പരി. കാതോലിക്കാ ബാവ',
  //     "date" : 'Day 6',
  //     "id"  : 'qi-4AzBlbEM?si=aoX71mChRkF-W4MS'
  //   },
  //   {
  //     "name" : 'അഭി.അലക്സിയോസ് മാർ യൗസേബിയോസ്',
  //     "date" : 'Day 7',
  //     "id"  : 'P0Ceuw4DsEU?si=jkwWZD-mvpNJQrTN'
  //   },
  //   {
  //     "name" : 'അഭി.ഡോ.യാക്കോബ് മാർ ഐറേനിയസ്',
  //     "date" : 'Day 8',
  //     "id"  : 'P0Ceuw4DsEU?si=OvDR4-__n9ZJWHp2'
  //   }
  // ]
  return (
    <div className='container pt-5'>
      {/* <div id="day_7" className='my-3'>
        <h3 className='fs-16'>Day 7 - 7th September 2025</h3>
        <hr />
        <p className='fs-14'>
          സന്ധ്യാ നമസ്കാരം , റാസ
          <br />
          Live from : 5:00 pm
        </p>
      </div>
      <div className='mb-2'>
        <ReactPlayer src="https://www.youtube.com/live/gV3ahWQ0XSk?si=xDebRh0SiEoVY8v6" width={'100%'} height={'350px'} autoPlay controls></ReactPlayer>
      </div> */}
      {/* <div className="row gap-3 mb-3 justify-content-center">
        {
          liveData.map((user, id)=>(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
              <div className="card" style={{minHeight:'350px'}}>
                <div className="image-wrapper">
                  <iframe width="250" height="150" src={'https://www.youtube.com/embed/'+user?.id} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
      <NoData />
    </div>
  )
}

export default Live