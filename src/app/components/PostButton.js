"use client";
// font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

// shadcn
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Convert a file to base64 string
const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const PostButton = ({ jwt }) => {
  const token = jwt;
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get("content");
    const inputImage = formData.get("image");
    var image = null;
    if (inputImage.size > 0) {
      image = await toBase64(inputImage);
    }

    const tagRegex = /#(\w+)/g;
    const removeTagRegex = /#\S+/g;
    var tags = [...content.matchAll(tagRegex)].map((match) => match[1]);

    console.log(
      "Fetch Request:",
      JSON.stringify({ content, tags, image, token }),
    );

  }
  return (
    <>
      <Dialog className="w-full">
        <DialogTrigger asChild>
          <div>
            <button className="items-center justify-center w-full py-2 text-white transition duration-300 ease-in-out cursor-pointer rounded-xl bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-400 md:hidden lg:flex">
              Post
            </button>
            <div className="hidden text-primary-700 md:block lg:hidden">
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="w-3/4 rounded-xl">
          <DialogHeader>
            <DialogTitle>Create a Post</DialogTitle>
            <DialogDescription>
              Click submit when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="">
            <div className="grid items-center grid-cols-4 gap-4 py-4">
              <Textarea
                name="content"
                className="h-40 col-span-4 text-base transition ease-in-out focus-visible:ring-neutral-0 ring-0 ring-primary-500 focus-visible:ring-2 "
                placeholder="Write your text here."
              />
              <Input
                type="file"
                name="image"
                accept="image/*"
                className="col-span-4"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PostButton;
