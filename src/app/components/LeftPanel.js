import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHome,
  faUser,
  faMessage,
  faBookmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import PostButton from "./PostButton";
import { cookies } from "next/headers";
const LeftPanel = () => {
  const cookieStore = cookies();
  //const jwt = cookieStore.get("jwt").value;
  const jwt = 0;
  return (
    <>
      <div className="order-1 hidden flex-col items-center px-5 pt-1 md:flex lg:pt-0">
        <div className="relative mt-10 h-2/3 flex-col rounded font-semibold">
          {/* Menu */}
          <div className="flex flex-col space-y-10 pr-5 text-xl lg:pr-0">
            <a
              href="/mit-edu"
              className="flex cursor-pointer items-center transition ease-in-out hover:text-primary-500 dark:hover:text-primary-300"
            >
              <FontAwesomeIcon icon={faHome} className="pr-2" />
              <span className="hidden lg:block">Home</span>
            </a>
            <a
              href="/bookmarks"
              className="flex cursor-pointer items-center transition ease-in-out hover:text-primary-500 dark:hover:text-primary-300"
            >
              <FontAwesomeIcon icon={faBookmark} className="pr-2" />
              <span className="hidden lg:block">Bookmarks</span>
            </a>
            <a
              href="/notifications"
              className="flex cursor-pointer items-center transition ease-in-out hover:text-primary-500 dark:hover:text-primary-300"
            >
              <FontAwesomeIcon icon={faBell} className="pr-2" />
              <span className="hidden lg:block">Notifications</span>{" "}
              <div className="absolute right-0 ml-2 h-2 w-2 rounded-full bg-red-400"></div>
              <div className="ml-2 hidden h-2 w-2 animate-ping rounded-full bg-red-400 lg:block"></div>
            </a>

            <a
              href="/mit-edu/u/profile"
              className="flex cursor-pointer items-center transition ease-in-out hover:text-primary-500 dark:hover:text-primary-300"
            >
              <FontAwesomeIcon icon={faUser} className="pr-2" />
              <span className="hidden lg:block">Profile</span>
            </a>
            <PostButton jwt={jwt} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
