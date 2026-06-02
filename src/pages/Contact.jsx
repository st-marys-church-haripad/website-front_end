import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <section id="address" className='mt-3'>
        <h3 className='fs-14'>Address</h3>
        <hr />
        <address className="content fs-14">
          <p>St.Mary's Orthodox Church</p>
          <p>Haripad, Alappuzha, Kerala - 690514</p>
          <p>Email: <a href="mailto:vicar@stmarysharipad.com">vicar@stmarysharipad.com</a></p>
          <p>Phone: <a href="tel:04792402445">0479-2402445</a></p>
        </address>
      </section>
      <section id="location" className='mt-5'>
        <h3 className='fs-14'>Location</h3>
        <hr />
        <div style={{ width: '100%', height: '300px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.5766125853334!2d76.46479207456207!3d9.282068590789738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061ff9d66a66b1%3A0xd51c959f2e29c6ae!2sArazhy%20St.%20Mary&#39;s%20Orthodox%20Church!5e0!3m2!1sen!2sin!4v1763308706488!5m2!1sen!2sin"
            style={{
              border: '0',
              width: '100%',
              height: '100%',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title='Arazhy Haripad'
          ></iframe>
        </div>
      </section>
      <section id="social" className='mt-5 mb-5'>
        <h3 className='fs-14'>Social media</h3>
        <hr />
        <div className='social_media d-flex align-items-center justify-content-around flex-wrap gap-2 malayalam-font'>
          <div className="fb">
            <i className="fa-brands fa-facebook fs-14" aria-label="Facebook" style={{'margin-right': '5px'}}></i>
            <a href="https://www.facebook.com/arazhipallyharipad" className='text-success' target='_blank' rel="noopener noreferrer">
              ഹരിപ്പാട് ആരാഴിപ്പളളി (Facebook) <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>  
          </div>
          {/* <div className="instagram">
            <i className="fa-brands fa-instagram fs-14" aria-label="Instagram" style={{'margin-right': '5px'}}></i>
            <a href="https://www.instagram.com/ocym_arazhi_pally/" className='text-success' target='_blank' rel="noopener noreferrer">
              ഹരിപ്പാട് ആരാഴിപ്പളളി (Instagram) <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>  
          </div> */}
          <div className="email">
            <i className="fa-regular fa-envelope fs-14" aria-label="Email" style={{'margin-right': '5px'}}></i>
            <a href="mailto:arazhipalliharipad@gmail.com" className='text-success'>
              ഹരിപ്പാട് ആരാഴിപ്പളളി (Email) <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>  
          </div>
          <div className="whatsapp">
            <i className="fa-brands fa-whatsapp fs-14" aria-label="WhatsApp" style={{'margin-right': '5px'}}></i>
            <a href="https://wa.me/9188840555" className='text-success' target='_blank' rel="noopener noreferrer">
              ഹരിപ്പാട് ആരാഴിപ്പളളി (WhatsApp) <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>  
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact