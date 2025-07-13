import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '@/styles/App.css'
import LoaderComponent from './components/shared/LoaderComponent'
import Routers from './routes/Routers';

function App() {
  const [loader, setLoader] = useState(true)
  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    const loaderTimeout = setTimeout(() => {
      setLoader(false);
    }, 400);
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, [location]);

  return (
    <>
    { loader ? <LoaderComponent /> :  <Routers /> }
    </>
  );
}

export default App
