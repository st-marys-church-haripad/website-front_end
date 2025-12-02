import { jubilee } from '@/assets/asset'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const PopupCelebrations = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        setSize({ width: window.innerWidth, height: window.innerHeight })
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  if (!size.width || !size.height) return null
  
  return (
    <>
        <div
            className={`modal fade ${visible ? 'show d-block' : 'd-none'}`}
            style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
            aria-modal="true"
            role="dialog"
        >
            <Confetti width={size.width} height={size.height} numberOfPieces={500} tweenDuration={6000} recycle={false} />
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="btn-close" onClick={() => setVisible(false)} />
                    <div className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '200px' }}>
                        <img
                            src={jubilee}
                            className="img-fluid"
                            loading='lazy'
                            alt="125 Years Celebrations"
                            style={{
                            transition: 'filter 0.6s ease',
                            display: 'block',
                            width: '20%',
                            height: '20%',
                            objectFit: 'cover',
                            marginBottom: '10px',
                            }}
                        />
                       <p className="fw-600 text-center"><i>125 Years of St.Mary's Church Celebrations!</i></p>
                    </div>                 
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default PopupCelebrations