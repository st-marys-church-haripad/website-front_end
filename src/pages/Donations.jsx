import React from 'react'

const Donations = () => {
  return (
    <>
      <div className='container'>
        <table className="table table-bordered table-striped mb-1 fs-14 caption-top mt-2">
          <caption>Bank account details for St. Mary's Orthodox Church</caption>
          <thead>
            <tr>
              <th scope="col">A/C NO.</th>
              <th scope="col">IFSC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>57028404772</td>
              <td>SBIN0070086</td>
            </tr>
          </tbody>
        </table>
        <p className="fs-14 text-center">Payment gateway will be integrated soon!</p>
        <p className="fs-14 text-center">For donation queries, contact <a href="mailto:vicar@stmarysharipad.com">vicar@stmarysharipad.com</a></p>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Donations