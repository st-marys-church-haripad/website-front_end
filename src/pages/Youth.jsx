import { ancy_satheesh, roby } from '@/assets/asset';
import MemberCard from '@/components/shared/MemberCard';
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
      "prof_img": ancy_satheesh
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
            {ocymData.map((user) => <MemberCard user={user} key={user.name} />)}
          </div>
          <h3 className="fs-14 mt-2">OCYM executive committee members</h3>
          <hr />
          <div className="row gap-3 mb-3 justify-content-center">
            {ocymExecutive.map((user) => <MemberCard user={user} key={user.name} />)}
          </div>
        </div>
    </div>
  )
}

export default Youth