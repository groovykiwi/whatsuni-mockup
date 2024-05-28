import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center"></div>
      {/* <TopNavbar university="TODO" /> */}
      {/* Panels */}
      {/* <div className="w-screen flex justify-center h-[calc(100%-4.75rem)]">
          <Skeleton className="flex-col items-center order-1 hidden px-5 pt-1 md:flex lg:pt-0"></Skeleton>{" "}
          <Skeleton className="relative flex-col order-3 hidden mt-10 lg:flex"></Skeleton>
          {/* Center Panel */}
      {/* <Skeleton className="flex flex-col items-center justify-center order-2 w-full h-screen mt-4 md:w-2/3 lg:w-1/3 lg:mx-10" /> */}
    </>
  );
};

export default Loading;
