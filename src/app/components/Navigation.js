import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHome,
  faUser,
  faMessage,
  faBookmark,
  faPen,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import PostButton from "./PostButton";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div className="flex items-center justify-center h-full ">
        <div className="flex flex-col pr-5 space-y-12 text-xl font-semibold lg:pr-0">
          <Link href="/mit-edu" className="flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faHome} className="pr-5" />
            <span className="">Home</span>
          </Link>
          <Link href="/notifications" className="flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faSearch} className="pr-5" />
            <span className="">Search</span>
          </Link>
          <Link href="/bookmarks" className="flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faBookmark} className="pr-5" />
            <span className="">Bookmarks</span>
          </Link>
          <Link href="/notifications" className="flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faBell} className="pr-5" />
            <span className="">Notifications</span>{" "}
            <div className="w-2 h-2 ml-2 bg-red-400 rounded-full"></div>
          </Link>

          <Link
            href="/mit-edu/u/profile"
            className="flex items-center cursor-pointer"
          >
            <FontAwesomeIcon icon={faUser} className="pr-5" />
            <span className="">Profile</span>
          </Link>
          <PostButton />
        </div>
      </div>
    </>
  );
};

export default Navigation;
