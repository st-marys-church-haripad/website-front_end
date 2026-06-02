import { jubilee } from '@/assets/asset'
import React from 'react'

const Jubilee = () => {
  return (
    <>
        <div className="container">
            <div className="mt-3">
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
                </div>
            </div>
        </div>
    </>
  )
}

export default Jubilee