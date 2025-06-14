import React from 'react';

export default function SignIn({ switchToSignUp, close }) {
  return (
    <>
      <h4 className="text-center mb-3">Sign In</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="mb-2 text-end">
          <a href="#" className="text-decoration-none">Forgot password?</a>
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign In</button>
      </form>
      <div className="mt-3 text-center">
        Don't have an account?{' '}
        <button className="btn btn-link p-0" onClick={switchToSignUp}>Sign Up</button>
      </div>
      <button className="btn btn-link w-100 mt-2 text-danger" onClick={close}>Cancel</button>
    </>
  );
}
