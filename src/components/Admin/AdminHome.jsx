
import { useNavigate } from 'react-router-dom'
import './AdminHome.css'
import vid from '/public/auto.mp4'
import { useEffect } from 'react';

export const Adminhome = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Navigate to another route after 10 seconds
      navigate('/jobss');
    }, 6000); // 6 seconds in milliseconds

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigate]);


  return (
    <>


      <div className='videodivadmin'>
        <video src={vid} loop autoPlay muted></video>
        <div className="adminhome">
          <h1 className="animatedadmin-text">- Welcome to Softcadia Admin Pannel -</h1>
        </div>
      </div>

    </>
  )
}