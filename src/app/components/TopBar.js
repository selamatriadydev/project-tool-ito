// components/TopBar.js
"use client"; // karena ada interaksi dropdown dan toggle


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Badge, Button } from "react-bootstrap";

export default function TopBar() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  const toggleSidebar = () => {
    const body = document.body;

    // Toggle collapsed
    const isCollapsed = body.classList.toggle('sidebar-collapsed');

    if (!isCollapsed) {
      // Jika sidebar tidak collapsed (diblokir / dibuka), pastikan ada class 'sidebar-open'
      body.classList.add('sidebar-open');
    } else {
      // Jika collapsed, hapus class 'sidebar-open'
      body.classList.remove('sidebar-open');
    }
  };

  const messages = [
    { img: "/assets/img/user1-128x128.jpg", name: "Brad Diesel", time: "4 Hours Ago", text: "Call me whenever you can...", iconClass: "bi-star-fill text-danger" },
    { img: "/assets/img/user8-128x128.jpg", name: "John Pierce", time: "4 Hours Ago", text: "I got your message bro", iconClass: "bi-star-fill text-secondary" },
    { img: "/assets/img/user3-128x128.jpg", name: "Nora Silvester", time: "4 Hours Ago", text: "The subject goes here", iconClass: "bi-star-fill text-warning" },
  ];

  const notifications = [
    { icon: "bi-envelope", text: "4 new messages", time: "3 mins" },
    { icon: "bi-people-fill", text: "8 friend requests", time: "12 hours" },
    { icon: "bi-file-earmark-fill", text: "3 new reports", time: "2 days" },
  ];

  return (
    <nav className="app-header navbar navbar-expand bg-body">
      <div className="container-fluid">
        {/* Start Navbar Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" role="button" onClick={toggleSidebar}>
              <i className="bi bi-list"></i>
            </a>
          </li>
          {/* <li className="nav-item d-none d-md-block">
            <Link href="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link href="/contact" className="nav-link">Contact</Link>
          </li> */}
        </ul>

        {/* End Navbar Links */}
        <ul className="navbar-nav ms-auto">
          {/* Navbar Search */}

          {/* Messages Dropdown */}
          <li className="nav-item dropdown">
            <a className={`nav-link ${showMessages ? 'show' : ''}`} href="#" onClick={() => setShowMessages(!showMessages)}>
              <i className="bi bi-chat-text"></i>
              <span className="navbar-badge badge text-bg-danger">3</span>
            </a>
            {showMessages && (
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end show p-2" data-bs-popper="static">
                {messages.map((msg, idx) => (
                  <MessageItem key={idx} {...msg} />
                ))}
                <div className="dropdown-divider"></div>
                <Link href="#" className="dropdown-item dropdown-footer">See All Messages</Link>
              </div>
            )}
          </li>

          {/* Notifications Dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" onClick={() => setShowNotifications(!showNotifications)}>
              <i className="bi bi-bell-fill"></i>
              <span className="navbar-badge badge text-bg-warning">15</span>
            </a>
            {showNotifications && (
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end show" data-bs-popper="static">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider"></div>
                {notifications.map((n, idx) => (
                  <Link href="#" key={idx} className="dropdown-item">
                    <div><i className={`bi ${n.icon} me-2`}></i>{n.text}</div>
                    <small className="float-end text-secondary">{n.time}</small>
                  </Link>
                ))}
                <div className="dropdown-divider"></div>
                <Link href="#" className="dropdown-item text-center">See All Notifications</Link>
              </div>
            )}
          </li>

          {/* Fullscreen */}
          <li className="nav-item">
            <button className="nav-link btn" onClick={toggleFullscreen}>
              <i className={`bi ${isFullscreen ? "bi-fullscreen-exit" : "bi-arrows-fullscreen"}`}></i>
            </button>
          </li>

          {/* User Menu */}
          <li className="nav-item dropdown user-menu">
            <a href="#" className="nav-link dropdown-toggle" onClick={() => setShowUserMenu(!showUserMenu)}>
              {/* <img src="/assets/img/user2-160x160.jpg" className="user-image rounded-circle shadow" alt="User Image" /> */}
              <span className="d-none d-md-inline">Mamat</span>
            </a>
            {showUserMenu && (
              <div className="dropdown-menu dropdown-menu-end show" data-bs-popper="static">
                <div className="user-header text-bg-primary text-center p-2 rounded">
                  <Image src="/assets/img/user2-160x160.jpg" width={60} height={60} alt="User" className="rounded-circle mb-2" />
                  <p className="mb-0">Mamat</p>
                  <small>Member since Nov. 2023</small>
                </div>
                <div className="user-body mt-2 d-flex justify-content-around">
                  <Link href="#">Followers</Link>
                  <Link href="#">Sales</Link>
                  <Link href="#">Friends</Link>
                </div>
                <div className="user-footer">
                  <Link href="#" className="btn btn-primary btn-sm ">Profile</Link>
                  <Link href="#" className="btn btn-danger btn-sm float-end">Sign out</Link>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Sub-komponen MessageItem
function MessageItem({ img, name, time, text, iconClass }) {
  return (
    <>
    <div className="dropdown-divider"></div>
    <div className="d-flex">
      <div className="flex-shrink-0">
        {/* <img src={img} alt="User Avatar" className="img-size-50 rounded-circle me-3" /> */}
        <Image src={img} width={50} height={50} className="rounded-circle" alt="User Avatar" />
      </div>
      <div className="flex-grow-1">
        <h3 className="dropdown-item-title">
          {name} <span className={`float-end fs-7 ${iconClass}`}></span>
        </h3>
        <p className="fs-7">{text}</p>
        <p className="fs-7 text-secondary">
          <i className="bi bi-clock-fill me-1"></i> {time}
        </p>
      </div>
    </div>
    </>
  );
}
