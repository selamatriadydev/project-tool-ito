"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="lockscreen bg-body-secondary">
      <div className="lockscreen-wrapper">
        <div className="lockscreen-logo">
          <Link href="/" className="text-decoration-none">
            <b>Admin</b>LTE
          </Link>
        </div>

        <div className="lockscreen-name">John Doe</div>

        <div className="lockscreen-item">
          <div className="lockscreen-image">
            <Image
              src="/adminlte/img/user1-128x128.jpg"
              alt="User Image"
              width={128}
              height={128}
            />
          </div>

          <form className="lockscreen-credentials">
            <div className="input-group">
              <input
                type="password"
                className="form-control shadow-none"
                placeholder="password"
              />
              <div className="input-group-text border-0 bg-transparent px-1">
                <button type="button" className="btn shadow-none">
                  <i className="bi bi-box-arrow-right text-body-secondary"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
