import React from 'react';
import { Link } from 'react-router-dom';

// get host from environment variable
// const HOST = process.env.HOST || 'localhost';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand logo">&lt;deandraper.dev&gt;</Link>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link to="/" className="nav-link active">HOME</Link></li>
              <li className="nav-item">
                <a href={`http://localhost:3789/resume`} className="nav-link active">RESUME</a>
                {/* <Link to="/resume" className="nav-link active">RESUME</Link> */}
                </li>
              <li className="nav-item"><Link to="/blog" className="nav-link active">BLOG</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


export default NavBar;