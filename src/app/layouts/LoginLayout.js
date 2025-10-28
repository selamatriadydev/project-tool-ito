// layouts/LoginLayout
"use client";
import Link from "next/link";

export default function LoginLayout({children}) {

  return (
    <div className="login-page bg-body-secondary">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <Link
              href="/"
              className="link-dark link-offset-2 link-opacity-100 link-opacity-50-hover"
            >
              <h1 className="mb-0">
                <b>Admin</b>LTE
              </h1>
            </Link>
          </div>
            {children}
        </div>
      </div>
    </div>
  );
}
