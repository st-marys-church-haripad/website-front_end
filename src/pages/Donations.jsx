// import Footer from '@/components/shared/Footer'
import React from 'react'

const Donations = () => {
  return (
    <>
      <div className='container'>
        <table className="table table-bordered table-striped mb-1 fs-14 caption-top mt-2">
          <caption>Bank account details</caption>
          <thead>
            <tr>
              <th>A/C NO.</th>
              <th>IFSC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>57028404772</td>
              <td>SBIN0070086</td>
            </tr>
          </tbody>
        </table>
        <p className="fs-14 text-center">Payment gateway will be integrated soon!.</p>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Donations