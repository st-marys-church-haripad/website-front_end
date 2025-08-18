import { no_image, roby } from '@/assets/asset';
import React from 'react'

const Youth = () => {
  const ocymData = [
    {
      "name"    : 'Rev. Fr. K. P. Varghese',
      "desig"   : 'President',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
    {
      "name"    : 'Smt. Ancy Satheesh',
      "desig"   : 'Vice president',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
    {
      "name"    : 'Sri. Shibin S',
      "desig"   : 'Secretary',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
    {
      "name"    : 'Kum. Shini S',
      "desig"   : 'Joint secretary',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
    {
      "name"    : 'Sri. Alen Jose',
      "desig"   : 'Treasurer',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
  ];
  const ocymExecutive = [
    {
      "name"    : 'Sri. Aswin Shibu Mathai',
      "desig"   : '',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
    {
      "name"    : 'Sri. Sharon Philip',
      "desig"   : '',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
    {
      "name"    : 'Sri. Navin M Tharakan',
      "desig"   : '',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
    {
      "name"    : 'Sri. Roby Thomas',
      "desig"   : '',
      "address" : '',
      "number"  : '',
      "prof_img": roby
    },
    {
      "name"    : 'Smt. Jisha George',
      "desig"   : '',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
  ]
  return (
    <div className='container'>
        <div id="about" className='mt-3'>
            <h3 className="fs-16">About OCYM</h3>
            <hr />
            <p className="malayalam-font fs-14">
                ഓർത്തഡോക്സ് ക്രിസ്‌ത്യൻ യൂത്ത് മൂവ്മെന്റ് (OCYM)
                <br />
                ആരാധന, പഠനം, സേവനം എന്ന ത്രികാല ദിശയിലൂടെയാണ് സഭയുടെയും സമൂഹത്തിന്റെയും ക്ഷേമത്തിനും പുരോഗതിക്കും ഈ സംഘടന സംഭാവന നൽകുന്നത്.
            </p>
        </div>
        <div id="ocym-administration" className="mt-5">
          <h3 className="fs-16">OCYM administration</h3>
          <hr />
          <div className="row gap-3 mb-3 justify-content-center">
            {
              ocymData.map((user, id)=>(
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                  <div className="card" style={{minHeight:'332px'}}>
                    <div className="image-wrapper">
                      <img src={user?.prof_img == '' ? no_image : user?.prof_img} className="card-img-top" loading='lazy' style={{ 
                        transition: 'filter 0.6s ease',
                        width: user?.prof_img == '' ? '' : '100%',
                        height: user?.prof_img == '' ? '' : '100%',
                        display: 'block',
                        objectFit: 'cover',
                        objectPosition: 'center 20%'
                      }} />
                    </div>
                    <div className="card-body text-center">
                      <h3 className='fs-14'>{user?.name}</h3>
                      <p className='fs-14 mb-0'>{user?.desig}</p>
                      <p className='fs-14 mb-0'>{user?.number}</p>
                      <p className='fs-14 mb-0'>{user?.address}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <h3 className="fs-14 mt-2">OCYM executive committee members</h3>
          <hr />
          <div className="row gap-3 mb-3 justify-content-center">
            {
              ocymExecutive.map((user, id)=>(
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                  <div className="card" style={{minHeight:'332px'}}>
                    <div className="image-wrapper">
                      <img src={user?.prof_img == '' ? no_image : user?.prof_img} className="card-img-top" loading='lazy' style={{ 
                        transition: 'filter 0.6s ease',
                        width: user?.prof_img == '' ? '' : '100%',
                        height: user?.prof_img == '' ? '' : '100%',
                        display: 'block',
                        objectFit: 'cover',
                        objectPosition: 'center 20%'
                      }} />
                    </div>
                    <div className="card-body text-center">
                      <h3 className='fs-14'>{user?.name}</h3>
                      <p className='fs-14 mb-0'>{user?.desig}</p>
                      <p className='fs-14 mb-0'>{user?.number}</p>
                      <p className='fs-14 mb-0'>{user?.address}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Youth