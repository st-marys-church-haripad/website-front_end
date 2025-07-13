import { maryImg } from '@/assets/asset';
import { useState } from 'react';
import React from 'react'

const LoaderComponent = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className='splash-container'>
        <div className="splash-image">
            <img src={ maryImg } 
                onLoad={() => setImgLoaded(true)}
                style={{ 
                  filter: imgLoaded ? 'blur(0px)' : 'blur(10px)',
                  transform: imgLoaded ? 'scale(1)' : 'scale(1.05)',
                  transition: 'filter 0.2s ease, transform 0.2s ease',
                 }}
            />
        </div>
    </div>
  )
}

export default LoaderComponent;