import "./navbar.css";
import logo from "../../assets/Netflix_Logo_RGB.png";
import Drawer from "react-modern-drawer";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "../../firebase/firebase.config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const navref = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add("nav-dark");
      } else {
        navref.current.classList.remove("nav-dark");
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div ref={navref} className="navbar">
      <div className="navbar-left">
        <img className="navbar-logo" src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <Icon icon="bitcoin-icons:search-outline" width="24" height="24" />
        <p>children</p>
        <Icon icon="solar:bell-linear" width="24" height="24" />
        <div className="navbar-profile">
          {user ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Sign In</button>
          )}
        </div>
      </div>

      <div className="navbar-mobile">
        <img className="navbar-logo" src={logo} alt="" />
        <div>
          <Icon
            style={{ cursor: "pointer" }}
            onClick={toggleDrawer}
            icon="ion:menu"
            width="24"
            height="24"
            color="#E50914"
          />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="drawer"
          >
            <ul>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
            <div className="navbar-profile">
              {user ? (
                <button onClick={() => logout()}>Logout</button>
              ) : (
                <button onClick={() => navigate("/login")}>Sign In</button>
              )}
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
