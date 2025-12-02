import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '@/styles/App.css'
import LoaderComponent from './components/shared/LoaderComponent'
import Routers from './routes/Routers';
import PopupCelebrations from './components/shared/PopupCelebrations';

function App() {
  const [loader, setLoader] = useState(true)
  const location = useLocation();
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setLoader(true);
    const loaderTimeout = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, [location]);

  useEffect(() => {
     const alreadyShown = sessionStorage.getItem("celebrationShown");
    if (!alreadyShown) {
      sessionStorage.setItem("celebrationShown", "true");
      setShowCelebration(true);
    }
  }, []);

  return (
    <>
      {showCelebration && <PopupCelebrations />}
      { loader ? <LoaderComponent /> :  <Routers /> }
    </>
  );
}

export default App
