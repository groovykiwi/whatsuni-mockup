// Styling Imports
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ProfileCard = ({
  username,
  email,
  pfp,
  bio,
  followers,
  followings,
  ownership,
}) => {
  return (
    <>
      {/* User Profile Details */}
      <div className="flex w-full flex-col items-start justify-start border border-gray-200 dark:border-zinc-600 dark:bg-dark-background-secondary md:mb-3 md:rounded-md">
        {/* PFP and Banner */}
        {pfp ? (
          <Image
            src={pfp}
            width={256}
            height={256}
            className="ml-4 mt-3 aspect-square w-40 rounded-full border-4 border-gray-300"
            alt="Profile Picture"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            className="ml-4 mt-3 aspect-square cursor-pointer rounded-full bg-primary-500 object-cover p-10 text-6xl text-white"
          />
        )}
        {/* User Details Text */}
        <div className="pt- flex w-full flex-col p-3">
          <div className="flex items-center justify-between pt-2 ">
            <h1 className="text-lg font-bold ">{username}</h1>{" "}
            {ownership && (
              <h1 className="cursor-pointer rounded-full border border-black p-1 text-sm font-bold transition duration-300 ease-in-out hover:border-primary-700 hover:text-primary-700 dark:border-zinc-300">
                Edit profile
              </h1>
            )}
          </div>
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-0 cursor-pointer text-primary-700"
            >
              {email}
            </a>
          )}

          <span>{bio}</span>
          <div className="flex pt-1">
            <span className="pr-2 font-semibold">
              Followers: <span className="font-normal">{followers}</span>
            </span>
            <span className="font-semibold">
              Followings: <span className="font-normal">{followings}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
