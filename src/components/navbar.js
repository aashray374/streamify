import React, { useState, useRef, useEffect } from 'react';
import SignIn from '../auth/signin';
import SignUp from '../auth/signup';


export default function Navbar() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayType, setOverlayType] = useState('');
  const modalRef = useRef(null);

  const showOverlay = (type) => {
    setOverlayType(type);
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setOverlayType('');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeOverlay();
      }
    };

    if (overlayVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [overlayVisible]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={() => showOverlay('signin')}>Sign in</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={() => showOverlay('signup')}>Sign up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {overlayVisible && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1050 }}
        >
          <div
            ref={modalRef}
            className="bg-white p-4 rounded"
            style={{ minWidth: '350px', position: 'relative' }}
          >
            {overlayType === 'signin' ? (
              <SignIn switchToSignUp={() => showOverlay('signup')} close={closeOverlay} />
            ) : (
              <SignUp switchToSignIn={() => showOverlay('signin')} close={closeOverlay} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
