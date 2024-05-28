import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const MobilePostInput = () => {
  return (
    <>
      <div className="grid w-full grid-cols-8 justify-center border border-gray-200 p-4 pr-8 dark:border-zinc-600 dark:bg-dark-background-secondary md:hidden ">
        <Image
          width={64}
          height={64}
          src="https://thispersondoesnotexist.com/"
          className="row-span-2 aspect-square w-14 min-w-10 cursor-pointer rounded-full object-cover"
          alt="Profile Picture"
        />
        <Textarea
          placeholder="Create a post here."
          className="focus-visible:ring-neutral-0 col-span-7 mb-3 ml-3 text-base ring-0 ring-primary-500 transition ease-in-out focus-visible:ring-2"
        />
        <Input type="file" accept="image/*" className="col-span-5 ml-3" />
        <div className="col-span-2 flex items-center justify-center">
          <button className="ml-8 max-w-16 cursor-pointer rounded-3xl bg-primary-500 px-4 py-1 text-white transition duration-300 ease-in-out hover:bg-primary-700">
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default MobilePostInput;
