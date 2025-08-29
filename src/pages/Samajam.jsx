import { no_image, selin, suja_paadiparambi } from '@/assets/asset';
import React from 'react'

const Samajam = () => {
  const samajam = [
      {
        "name"    : 'Smt. Selin Varghese',
        "desig"   : 'Secretary',
        "address" : '',
        "number"  : '',
        "prof_img": selin
      },
      {
        "name"    : 'Smt. Suja Georgekutty',
        "desig"   : 'Joint secretary',
        "address" : '',
        "number"  : '',
        "prof_img": suja_paadiparambi
      },
    ]
  return (
    <div className='container'>
        <div id="about" className='mt-3'>
            <h3 className="fs-16">About samajem</h3>
            <hr />
            <p className="malayalam-font fs-14">
                മർത്ത്മറിയം വനിതാ സമാജം ഇന്ത്യയിലെ മലങ്കര ഓർത്തഡോക്സ് സഭയുടെ വനിതാ വിഭാഗമാണ്. സ്ത്രീസമൂഹത്തെ ഏകോപിപ്പിക്കുന്ന സഭയുടെ പ്രധാന ആത്മീയ സംഘടനകളിൽ ഒന്നായി ഇത് കണക്കാക്കപ്പെടുന്നു.
            </p>
        </div>
        <div id="school-administration" className="mt-5">
          <h3 className="fs-16">samajem administration</h3>
          <hr />
          <div className="row gap-3 mb-3 justify-content-center">
            {
              samajam.map((user, id)=>(
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

export default Samajam