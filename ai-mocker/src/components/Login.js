import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark" style={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=c0d43804e2c7c93143fe8ff65398c8e9)'
      }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center d-flex-row text-center" style={{ minHeight: '80vh' }}> {/* Adjust height to center card */}
            <div className="col-12 col-md-4 col-lg-3">
              <div className="card shadow" style={{ marginTop: '-50px', borderRadius:'2rem' }}> {/* Reduce the top margin */}
                <div className="card-body mx-auto">
                  {/* Logo above "Login" */}
                  <img 
                    src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg"
                    alt="Admin Icon"
                    style={{ width: '100px', marginBottom: '10px' }} // Adjust size and margin as needed
                  />
                  <h4 className="card-title mt-3 text-center">Welcome</h4>
                  <p className="text-center">Sign in to your account</p>

                  <form>
                    <div className="form-group input-group my-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text my-1">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                      <input name="" className="form-control" placeholder="Email address" type="email" />
                    </div>

                    <div className="form-group input-group my-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text my-1">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                      <input className="form-control" placeholder="Password" type="password" />
                    </div>

                    <div className="form-group my-3">
                      <button type="submit" className="btn btn-primary btn-block"> Login </button>
                    </div>

                    <p className="text-center">
                      Don't have an account? <Link to="/register" style={{color:'red'}}>Sign Up</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
