import NoData from '@/components/shared/NoData'
import React from 'react'

const Youth = () => {
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
        <div id="school-administration" className="mt-5">
            <h3 className="fs-16">OCYM administration</h3>
            <hr />
            <NoData />
        </div>
    </div>
  )
}

export default Youth