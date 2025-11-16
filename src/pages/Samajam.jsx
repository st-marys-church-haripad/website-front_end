import { selin, suja_paadiparambi } from '@/assets/asset';
import MemberCard from '@/components/shared/MemberCard';
import React from 'react'

const Samajam = () => {
  const samajam = [
    {
      "name": 'Smt. Selin Varghese',
      "desig": 'Secretary',
      "address": '',
      "number": '',
      "prof_img": selin
    },
    {
      "name": 'Smt. Suja Georgekutty',
      "desig": 'Joint secretary',
      "address": '',
      "number": '',
      "prof_img": suja_paadiparambi
    },
  ]
  return (
    <div className='container'>
      <div id="about" className='mt-3'>
        <h3 className="fs-16">About <span className='malayalam-font fs-16'>സമാജം</span></h3>
        <hr />
        <p className="malayalam-font fs-14">
          മർത്ത്മറിയം വനിതാ സമാജം ഇന്ത്യയിലെ മലങ്കര ഓർത്തഡോക്സ് സഭയുടെ വനിതാ വിഭാഗമാണ്. സ്ത്രീസമൂഹത്തെ ഏകോപിപ്പിക്കുന്ന സഭയുടെ പ്രധാന ആത്മീയ സംഘടനകളിൽ ഒന്നായി ഇത് കണക്കാക്കപ്പെടുന്നു.
        </p>
      </div>
      <div id="school-administration" className="mt-5">
        <h3 className="fs-16"><span className='malayalam-font fs-16'>സമാജം</span> administration</h3>
        <hr />
        <div className="row gap-3 mb-3 justify-content-center">
          {samajam.map((user) => (
            <MemberCard user={user} key={user.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Samajam