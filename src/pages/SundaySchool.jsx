import NoData from '@/components/shared/NoData'
import React from 'react'

const SundaySchool = () => {
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
            <NoData />
        </div>
    </div>
  )
}

export default SundaySchool