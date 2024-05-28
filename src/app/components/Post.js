// Styling Imports
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faWarning } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartOutline,
  faComment as faCommentOutline,
  faBookmark as faBookmarkOutline,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Post = ({
  username,
  pfp,
  time,
  text,
  image,
  likes,
  comments,
  hashtags,
}) => {
  return (
    <>
      <div className="flex w-full flex-col justify-center border border-gray-200 p-2 shadow dark:border-zinc-600 dark:bg-dark-background-secondary md:my-2 md:rounded-md">
        {/* Information */}
        <div className="p-2">
          {/* User Details */}
          <div className="flex items-center pb-1 ">
            {pfp ? (
              <Image
                width={64}
                height={64}
                src={pfp}
                className="aspect-square w-10 cursor-pointer rounded-full object-cover"
                alt="Profile Picture"
              />
            ) : (
              <FontAwesomeIcon
                icon={faUser}
                className="aspect-square cursor-pointer rounded-full bg-primary-500 object-cover p-2.5 text-white"
              />
            )}
            <a href={`/mit-edu/u/${username}`}>
              <span className="ml-3 cursor-pointer font-bold">{username}</span>
            </a>
            <span className="ml-1">• {time} ago</span>
          </div>
          {/* Content */}
          <span>{text}</span>
        </div>
        {/* Image */}
        <Dialog>
          <DialogTrigger asChild>
            {image && (
              <div className="flex justify-center pb-3 ">
                <div className="overflow-hidden rounded">
                  <Image
                    width={1024}
                    height={1024}
                    className="max-h-96 max-w-80 cursor-pointer object-cover transition duration-500 ease-in-out hover:scale-105 lg:max-h-[30rem] lg:max-w-[26rem] "
                    src={image}
                    alt="Post Image"
                  />
                </div>
              </div>
            )}
          </DialogTrigger>
          <DialogContent className="max-w-screen max-h-[40rem] rounded-xl lg:w-[50rem] lg:max-w-[50-rem]">
            <DialogHeader>
              <DialogTitle>Image</DialogTitle>
            </DialogHeader>
            <Image
              width={2048}
              height={2048}
              className=" max-h-[35rem] w-full cursor-pointer object-contain py-1 "
              src={image}
              alt="Post Image"
            />
          </DialogContent>
        </Dialog>

        {/* Hashtags */}

        {hashtags && (
          <div className="space-x-4 pb-3 pl-2 pt-1 text-sm dark:text-font">
            {hashtags.map((hashtag, index) => (
              <span
                key={`${index}`}
                className="cursor-pointer rounded-xl bg-primary-300 px-2 py-1 transition duration-300 ease-in-out hover:text-primary-700 "
              >
                #{hashtag}
              </span>
            ))}
          </div>
        )}
        {/* Interactions */}
        <div className="flex items-center justify-center pb-2 pl-2 pt-2 text-xl font-normal md:justify-normal">
          <FontAwesomeIcon
            icon={faHeartOutline}
            className="cursor-pointer pr-2 transition duration-300 ease-in-out hover:text-red-400"
          />
          <span className="pr-3 text-sm">{likes}</span>
          <FontAwesomeIcon
            icon={faCommentOutline}
            className="cursor-pointer pr-2 transition duration-300 ease-in-out hover:text-primary-500 "
          />
          <span className="pr-3 text-sm">{comments}</span>
          <FontAwesomeIcon
            icon={faBookmarkOutline}
            className="cursor-pointer pr-2 transition duration-300 ease-in-out hover:text-primary-500 "
          />
          <FontAwesomeIcon
            icon={faWarning}
            className="ml-auto cursor-pointer pr-2 text-primary-300 transition duration-300 ease-in-out hover:text-red-400"
          />
        </div>
      </div>
    </>
  );
};

export default Post;
