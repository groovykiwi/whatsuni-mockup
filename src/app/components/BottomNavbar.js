// Styling Imports
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const BottomNavbar = () => {
  return (
    <>
      {/* Bottom Mobile Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md md:hidden ">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-8 py-6">
          <a
            href="/mit-edu"
            className="flex items-center space-x-3 text-2xl text-primary-500 "
          >
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href="/search" className="flex items-center space-x-3 text-2xl">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a
            href="/notifications"
            className="flex items-center space-x-3 text-2xl"
          >
            <FontAwesomeIcon icon={faBell} />
          </a>
          <a href="/messages" className="flex items-center space-x-3 text-2xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="/mit-edu/u/profile"
            className="flex items-center space-x-3 text-2xl"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default BottomNavbar;
