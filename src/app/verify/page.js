import Verify from "./Verify";
import { Suspense } from "react";

export const metadata = {
  title: "Verify",
};
const VerifyPage = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex h-screen flex-col items-center justify-center text-center text-xl">
            Loading...
          </div>
        }
      >
        <Verify />
      </Suspense>
    </>
  );
};

export default VerifyPage;
