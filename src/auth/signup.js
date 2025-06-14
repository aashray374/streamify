import React from 'react';

export default function SignUp({ switchToSignIn, close }) {
  return (
    <>
      <h4 className="text-center mb-3">Sign Up</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Create password" />
        </div>
        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
      <div className="mt-3 text-center">
        Already have an account?{' '}
        <button className="btn btn-link p-0" onClick={switchToSignIn}>Sign In</button>
      </div>
      <button className="btn btn-link w-100 mt-2 text-danger" onClick={close}>Cancel</button>
    </>
  );
}
