import React, { useEffect, useState } from 'react'
import { bgImg, bgVideo } from "@/assets/asset";
import { menuItems } from '@/routes/route';

const Banner = ({ location }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const commonStyles = {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
  };
  const path = location?.pathname
  const matchedMenu = menuItems.find(menu => 
    menu.url === path || 
    menu.subMenu?.some(sub => sub.url === path)
  );
  const currentYear = new Date().getFullYear().toString();
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="video-img-container" style={{
        height: (path == '/' || path == '/home') ? '60vh' : '40vh',
    }}>
        <div className="overlay"></div>
        {
            (path == '/home' || path == '/') ? <video
                src={bgVideo}
                onLoadedData={() => setVideoLoaded(true)}
                autoPlay
                muted
                loop
                style={{
                    ...commonStyles,
                    filter: videoLoaded ? 'blur(0px)' : 'blur(8px)',
                    transition: 'filter 0.6s ease',
                    overflow: 'hidden'
                }}
                poster={bgImg}
            />
            :
            path !== '/home' && <img 
                src={ bgImg } 
                className="img-fluid"
                onLoad={() => setImgLoaded(true)}
                style={{ 
                    filter: imgLoaded ? 'blur(0px)' : 'blur(8px)',
                    transition: 'filter 0.6s ease',
                    ...commonStyles
                }}
            />
        }
        {menuItems?.length > 0 && (
          <>
            {matchedMenu && (
              <p className={`fade-in ${fadeIn ? 'show' : ''}`}>
                {path === '/' ? '' : path.slice(1).replace(/-/g, ' ') + '.'}
              </p>
            )}

            {path.includes(currentYear) && (
              <p className={`malayalam-font fade-in ${fadeIn ? 'show' : ''}`}>
                എട്ടുനോമ്പ് {currentYear}
              </p>
            )}
          </>
        )}
    </div>
  )
}

export default Banner