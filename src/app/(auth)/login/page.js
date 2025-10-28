// (auth)/login/page 
"use client";
import { useState } from "react";
import Link from "next/link";
import LoginLayout from "@/app/layouts/LoginLayout";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);
  };
  return (
    <LoginLayout>
      <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-1">
                <div className="form-floating">
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    placeholder=""
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-group-text">
                  <span className="bi bi-envelope"></span>
                </div>
              </div>

              <div className="input-group mb-1">
                <div className="form-floating">
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    value={form.password}
                    onChange={handleChange}
                    placeholder=""
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input-group-text">
                  <span className="bi bi-lock-fill"></span>
                </div>
              </div>

              <div className="row">
                <div className="col-8 d-inline-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                </div>

                <div className="col-4">
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mb-3 d-grid gap-2">
              <p>- OR -</p>
              <button className="btn btn-primary">
                <i className="bi bi-facebook me-2"></i> Sign in using Facebook
              </button>
              <button className="btn btn-danger">
                <i className="bi bi-google me-2"></i> Sign in using Google+
              </button>
            </div>

            <p className="mb-1">
              <Link href="/forgot-password">I forgot my password</Link>
            </p>
            <p className="mb-0">
              <Link href="/register" className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
    </LoginLayout>
  );
}
          