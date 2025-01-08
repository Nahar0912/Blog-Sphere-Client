import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './../contexts/AuthContext';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
  }

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addBlogs">Add Blog</NavLink></li>
    <li><NavLink to="/allBlogs">All Blog</NavLink></li>
    <li><NavLink to="/featuredBlogs">Featured Blogs</NavLink></li>
    <li><NavLink to="/myWatchlist">Wishlist</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-3xl">Blog Sphere</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
            <div className="flex items-center">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                {user?.displayName || "User"}
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={handleSignOut}>Log-Out</button></li>
                    </ul>
                </div>
            </div>
        ) : (
            <Link to="/auth/login"><a className="btn">Login</a></Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
