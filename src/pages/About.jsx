import { annie_varghese, c_t_samuel, gerogekutty_paadi, idicula, jacob_alex, molly_samuel, no_image, santhama_thomas, selin, sunny_nelpurayil, sunny_vazhayil, yohannan } from '@/assets/asset';

import React from 'react';

const About = () => {
  const scheduleData = [
    {
      day: 'Sunday',
      services: [
        { time: '7.00 am', service: 'Morning Prayer' },
        { time: '8.00 am', service: 'Holy Qurbana' }
      ]
    },
    {
      day: 'Saturday & Other Days (Special occasions)',
      services: [
        { time: '6.30 am', service: 'Morning Prayer' },
        { time: '7.00 am', service: 'Holy Qurbana' }
      ]
    },
    {
      day: 'Wednesday',
      services: [
        { time: '5.30 pm', service: 'Evening Prayer' }
      ]
    }
  ];
  const parishAdministration = [
    {
      "name"    : 'Rev. Fr. K. P. Varghese',
      "desig"   : 'Vicar',
      "address" : '',
      "number"  : '+91 9447719819',
      "prof_img": ''
    },
    {
      "name"    : 'Sri. Jacob Samuel',
      "desig"   : 'Trustee',
      "address" : 'Kaleekaleth S J Villa',
      "number"  : '+91 9446193920',
      "prof_img": ''
    },
    {
      "name"    : 'Sri. Anil Chacko',
      "desig"   : 'Secretary',
      "address" : 'Mangattusheriyil',
      "number"  : '+91 9496113187',
      "prof_img": ''
    }
  ]
  const committee = [
    {
      "name"    : 'Sri. Yohannan Thomas',
      "desig"   : '',
      "address" : 'Bethel',
      "number"  : '',
      "prof_img": yohannan
    },
    {
      "name"    : 'Sri. C. T. Samuel',
      "desig"   : '',
      "address" : 'Kannileth',
      "number"  : '',
      "prof_img": c_t_samuel
    },
    {
      "name"    : 'Sri. Philp Mathew',
      "desig"   : '',
      "address" : 'Vaazhayil',
      "number"  : '',
      "prof_img": sunny_vazhayil
    },
    {
      "name"    : 'Sri. Georgekutty',
      "desig"   : '',
      "address" : 'Paadiparambil',
      "number"  : '',
      "prof_img": gerogekutty_paadi
    },
    {
      "name"    : 'Sri. Idiculla John',
      "desig"   : '',
      "address" : 'Mangattusheril Sukritham',
      "number"  : '',
      "prof_img": idicula
    },
    {
      "name"    : 'Sri. Shiju Mathai',
      "desig"   : '',
      "address" : 'Kadavil',
      "number"  : '',
      "prof_img": ''
    },
    {
      "name"    : 'Smt. Molly Samuel',
      "desig"   : '',
      "address" : 'Vaaluzhuthil new villa',
      "number"  : '',
      "prof_img": molly_samuel
    },
    {
      "name"    : 'Smt. Selin Varghese',
      "desig"   : '',
      "address" : 'Kadavil aashirvaadh',
      "number"  : '',
      'prof_img': selin
    },
    {
      "name"    : 'Smt. Annie Varghese',
      "desig"   : '',
      "address" : 'Alummootil padeetathil',
      "number"  : '',
      "prof_img": annie_varghese
    },
    {
      "name"    : 'Smt. Shanthamma Thomas',
      "desig"   : '',
      "address" : 'Manaveli madem',
      "number"  : '',
      "prof_img": santhama_thomas
    },
  ]
  const auditors = [
    {
      "name"    : 'Sri. Jacob Alex',
      "desig"   : '',
      "address" : 'Naduvilethu',
      "number"  : '',
      "prof_img": jacob_alex
    },
    {
      "name"    : 'Sri. Sunny Abraham',
      "desig"   : '',
      "address" : 'Nelpura Kizhakkathil',
      "number"  : '',
      "prof_img": sunny_nelpurayil
    }
  ]
  return (
    <>
      <div className='container'>
        <div id="history" className='mt-3'>
          <h3 className='fs-16'>History</h3>
          <hr />
          <p className='malayalam-font fs-14' style={{
            'textIndent': '150px',
            'textAlign': 'justify',
            'overflowWrap': 'anywhere',
            'wordBreak': 'break-word',   
            'display': 'block'
          }}>
            A.D. 13-ആം നൂറ്റാണ്ടിൽ കാർത്തികപ്പള്ളി താലൂക്കിൽ ചിതറിപ്പാർത്തിരുന്ന നസ്രാണി സമൂഹം ഹരിപ്പാട്ട് ഇപ്പോൾ സെന്റ് തോമസ്  മിഷൻ സെന്റർ സ്ഥിതി ചെയ്യുന്ന സ്ഥലത്ത് ഒരു ദേവാലയം സ്ഥാപിക്കുകയും
            അതിൽ ആരാധിക്കുകയും ആത്മീയ ദിഷ്ഠതികൾ നിർവഹിക്കുകയു ചെയ്തിരുന്നു. ആ സ്ഥലം ഇന്നു പള്ളി പറമ്പ് എന്ന് അറിയപ്പെടുന്നു. ഹരിപ്പാടിന്റെ പ്രാന്ത പ്രദേശങ്ങളിൽ അധിവസിച്ചിരുന്ന നസ്രാണികൾക്ക്
            മാത്രമല്ല വിവിധ മതസ്ഥർക്ക്  ഈ ദേവാലയം ഒരു അത്താണിയായിരുന്നു.
          </p>
          <p className='malayalam-font fs-14' style={{
            'textIndent': '150px',
            'textAlign': 'justify',
            'overflowWrap': 'anywhere',
            'wordBreak': 'break-word',   
            'display': 'block'
          }}>
            കാർത്തികപ്പള്ളി രാജാവിന്റെ കാലത്ത് ഹരിപ്പാടിന്റെ ദീപസ്തംഭമായിരുന്ന ദേവാലയം പൊളിച്ചു മാറ്റുന്നതിനും അത് രാജാവിന്റെ കോട്ടയ്ക്കകത്തു സ്ഥാപിക്കുന്നതിനും രാജാവ് ഉത്തരവിട്ടു. ചേപ്പാടിന്റെ
            സമീപവാസികൾ ആയിരുന്ന ക്രിസ്ത്യാനികളുടെ അഭ്യർത്ഥന മാനിച്ചു ഹരിപ്പാട്ട് നിന്നു പൊളിച്ച പള്ളിയുടെ പകുതി കാർത്തികപ്പള്ളിയിലും ബാക്കി പകുതി ചേപ്പാട്ടുമായി രണ്ടു ദേവാലയങ്ങൾ സ്ഥാപിക്കുന്നതിന് 
            രാജാവ് കല്പിച്ചു. അങ്ങനെ രണ്ടു ദേവാലയങ്ങൾ ഉയർന്നു വന്നെങ്കിലും ഹരിപ്പാട് പ്രദേശത്തു ദേവാലയം നഷ്ടമായി. കരുവാറ്റ കുഴിത്താറ്റിൽ ബഹുമാന്യനായ മാത്യു മുൻസിഫ് പ്രവർത്തിക്കുന്ന കാലത്ത് ഹരിപ്പാട്ടുകാർക്ക്
            നഷ്ടപ്പെട്ടു പോയ ദേവാലയം പുനഃസ്ഥാപിക്കാൻ ഉള്ള ശ്രമം ആരംഭിച്ചു.
          </p>
          <p className='malayalam-font fs-14' style={{
            'textIndent': '150px',
            'textAlign': 'justify',
            'overflowWrap': 'anywhere',
            'wordBreak': 'break-word',   
            'display': 'block'
          }}>
            അതിന്റെ ഫലമായി ഹരിപ്പാട്ട് നിന്നും അരനാഴിക ദൂരത്തുള്ള പിലപ്പുഴയിൽ ഒരു ദേവാലയത്തിനു ശിലാസ്ഥാപന കർമ്മം നിർവഹിച്ചത് അന്നത്തെ നിരണം ഭദ്രാസനത്തിന്റെ ചുമതല വഹിച്ചിരുന്ന പുണ്യശ്ലോകനായ
            പരിശുദ്ധ പരുമല തിരുമേനിയുടെ തൃക്കരങ്ങൾ കൊണ്ടാണ്. ഹരിപ്പാട് സെന്റ് മേരീസ് ഓർത്തഡോൿസ് സുറിയാനി പള്ളി എന്ന പേരിൽ പരിശുദ്ധ ദേവമാതാവിന്റെ നാമത്തിൽ 1901 ഒക്‌ടോബർ 23ന് (കൊല്ലവർഷം 1077
            തുലാമാസം 7ആം  തീയതി) ആയിരുന്നു ശിലാസ്ഥാപനം കർമ്മം. പരിശുദ്ധ പരുമല തിരുമേനിയുടെ ഇഹലോക ശുശ്രുഷ കാലയളവിൽ അവസാനമായി സ്ഥാപിച്ച ദേവാലയം എന്ന കീർത്തിയും ഹരിപ്പാട്ടു നിന്ന് അരനാഴിക
            ദൂരത്തായതിനാൽ അരനാഴിക പള്ളി എന്നും കാലാന്തരത്തിൽ ആരാഴിപ്പള്ളി എന്നും പൊതുവെ അറിയപെടുന്നതിനും ഇടയായി. ഇന്ന് ഈ ദേവാലയം തെക്കൻ മണർകാട് എന്നും അറിയപ്പെടുന്നു.
          </p>
          <p className='malayalam-font fs-14' style={{
            'textIndent': '150px',
            'textAlign': 'justify',
            'overflowWrap': 'anywhere',
            'wordBreak': 'break-word',   
            'display': 'block'
          }}>
            സാധാരണക്കാരും സാധുക്കളും തദ്ദേശവാസികളുമായ ക്രിസ്ത്യാനികളുടെ നിരന്തരമായ പരിശ്രമവും അതിലേറെ വ്രതാനുഷ്ഠാനങ്ങളുടെ  തുടരെ ഉള്ള പ്രാർത്ഥനകളുമാണ് ഈ ദേവാലയം ഇവിടെ സംജാതമാകുവാൻ ഇടയായത്
            എന്ന് വിശ്വസിക്കപ്പെടുന്നു. നാനാജാതി മമതസ്ഥരുടെ തീവ്രമായ പരിശ്രമവും ദേവാലയ സ്ഥാപനത്തിന് പിന്നിൽ ഉണ്ടായിരുന്നു. അതുകൊണ്ട് തന്നെ ഈ ദേവാലയത്തിന്റെ പെരുന്നാൾ  ചടങ്ങുകൾക്ക് നാനാജാതി മതസ്ഥരുടെ
            ആത്മാർത്ഥമായ സഹകരണവും പ്രാർത്ഥനയും ഉറച്ച വിശ്വാസവും അവർ അനുഭവിച്ചുകൊണ്ടിരിക്കുന്ന ദൈവകൃപയുടെ അനർഗള പ്രവാഹത്തിനുള്ള നാന്ദിയായി പ്രകടിപ്പിക്കുന്നതാണെന്ന് നേരിട്ട് മനസിലാക്കാൻ കഴിയുന്നു.
            പരിശുദ്ധ ദൈവമാതാവിനോടുള്ള മദ്ധ്യസ്ഥതകൾക്കു പേരുകേട്ട  ഈ ദേവാലയത്തിന്റെ പെരുന്നാൾ ചടങ്ങുകളും വളരെ വിപുലമായി നടത്തുന്ന പതിവാണുള്ളത്. നാനാജാതി മതസ്ഥരായ തദ്ദേശവാസികൾക്ക് ഈ ദേവാലയം 
            ഒരു അഭയ കേന്ദ്രമാണ്. ഈ ദേവാലയത്തിൽ വന്ന് ഒരു നേരമെങ്കിലും പ്രാർഥിച്ചിട്ടുള്ളവർക്ക് അത്ഭുതകരമായ ഫലസിദ്ധി ലഭിച്ചിട്ടുണ്ട്. ഇപ്പോഴും ലഭിച്ചുകൊണ്ടിരിക്കുന്നു. ഈ ദേവാലയത്തോടുള്ള ഭക്തിയും വിശ്വാസവും നാൾക്കുനാൾ
            വർദ്ധിക്കുകയും പരിശുദ്ധ ദൈവമാതാവിന്റെ മദ്ധ്യസ്ഥതയിലുള്ള  അഭയാർത്ഥന വളരുകയു ചെയ്തു കൊണ്ടിരിക്കുന്നത്  ഈ കാരണത്താലാണ്.
          </p>
        </div>
        <div id="service-timing" className='mt-5'>
          <h3 className='fs-16'>Service timing</h3>
          <hr />
          <table className="table table-bordered table-striped mb-2 fs-14">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => (
                <React.Fragment key={index}>
                  {item.services.map((service, serviceIndex) => (
                    <tr key={serviceIndex}>
                      {serviceIndex === 0 && (
                        <td rowSpan={item.services.length}>{item.day}</td>
                      )}
                      <td>{service.time}</td>
                      <td>{service.service}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div id="parish-administration" className='mt-5'>
          <h3 className='fs-16'>Parish administration</h3>
          <hr />
          <div className="row gap-3 mb-3 justify-content-center">
            {
              parishAdministration.map((user, id)=>(
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
          <h3 className='fs-14 mt-2'>Committee</h3>
          <hr />
          <div className="row gap-3 mb-3 justify-content-center">
            {
              committee.map((user, id)=>(
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
          <h3 className='fs-14 mt-2'>Auditors</h3>
          <hr />
          <div className="row gap-3 mb-3 justify-content-center">
            {
              auditors.map((user, id)=>(
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
          <h3 className="fs-14 mt-2">Perunnal convener</h3>
          <hr />
          <div className="row gap-3 mb-3 justify-content-center">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card" style={{minHeight:'332px'}}>
                <div className="image-wrapper">
                  <img src={no_image} className="card-img-top" />
                </div>
                <div className="card-body text-center">
                  <h3 className='fs-14'>Sri. Babu Pooyapallil</h3>
                  <p className='fs-14 mb-0'></p>
                  <p className='fs-14 mb-0'></p>
                  <p className='fs-14 mb-0'></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default About