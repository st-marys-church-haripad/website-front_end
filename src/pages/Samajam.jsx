import { no_image } from '@/assets/asset';
import React from 'react'

const Samajam = () => {
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
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card" style={{minHeight:'190px'}}>
                <div className="image-wrapper">
                  <img src={no_image} className="card-img-top" />
                </div>
                <div className="card-body text-center">
                  <h3 className='fs-14'>Smt. Selin Varghese</h3>
                  <p className='fs-14 mb-0'>Secretary</p>
                  <p className='fs-14 mb-0'></p>
                  <p className='fs-14 mb-0'></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Samajam