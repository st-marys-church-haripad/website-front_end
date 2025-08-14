import { amal, no_image, sunny_nelpurayil } from '@/assets/asset';
import React from 'react'

const SundaySchool = () => {
  const sundayData = [
    {
      "name"    : 'Sri. Sunny Abraham',
      "desig"   : 'HM',
      "address" : '',
      "number"  : '',
      "prof_img": sunny_nelpurayil
    },
    {
      "name"    : 'Sri. Roby Thomas',
      "desig"   : 'District secretary',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
  ]
  const balasamajamData = [
    {
      "name"    : 'Smt. Jessy Anil',
      "desig"   : 'Vice president',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    },
    {
      "name"    : 'Sri. Adam Baby John',
      "desig"   : 'Secretary',
      "address" : '',
      "number"  : '',
      "prof_img": ''
    }
  ]
  return (
    <div className='container'>
      <div id="about" className='mt-3'>
        <h3 className="fs-16">About sunday school</h3>
        <hr />
        <p className="malayalam-font fs-14">
          സൺ‌ഡേ സ്കൂളിന്റെ പ്രധാന ലക്ഷ്യം നമ്മുടെ കുട്ടികളെ ഓർത്തഡോക്സ് വിശ്വാസം അനുസരിച്ച് ജീവിക്കാനാണ് പ്രേരിപ്പിക്കുന്നത്. ക്രിസ്തുവിന്റെ ജീവിതം പഠിപ്പിക്കുന്നതിലൂടെ, ക്രിസ്തീയ മൂല്യങ്ങൾ അവരിൽ ആഴത്തിൽ പതിപ്പിക്കുകയും, 
          വിശ്വാസം ഉയർത്തിപ്പിടിച്ച് ലോകത്തോട് പങ്കുവെക്കാനും സൽപ്രവൃത്തികൾ നടത്താനും അവരെ തയ്യാറാക്കുന്നതാണ് ഈ വിദ്യാഭ്യാസത്തിന്റെ ഉദ്ദേശം.
        </p>
      </div>
      <div id="school-administration" className="mt-5">
        <h3 className="fs-16">Sunday school administration</h3>
        <hr />
        <div className="row gap-3 mb-3 justify-content-center">
          {
            sundayData.map((user, id)=>(
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
        <h3 className="fs-14 mt-2">Balasamajam</h3>
        <hr />
        <div className="row gap-3 mb-3 justify-content-center">
          {
            balasamajamData.map((user, id)=>(
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
        <h3 className="fs-14 mt-2">MGOCSM</h3>
        <hr />
        <div className="row gap-3 mb-3 justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card" style={{minHeight:'332px'}}>
              <div className="image-wrapper">
                <img src={amal} className="card-img-top" loading='lazy' style={{ 
                  transition: 'filter 0.6s ease',
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'center 20%'
                }} />
              </div>
              <div className="card-body text-center">
                <h3 className='fs-14'>Sri. Amal Jose Varghese</h3>
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

export default SundaySchool