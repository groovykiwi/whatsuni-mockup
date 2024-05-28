import RegisterForm from "../components/RegisterForm";

export const metadata = {
  title: "Register",
};

const domainNames = [
  "mit.edu",
  "cam.ac.uk",
  "harvard.edu",
  "mit.edu",
  "king.edu",
  "toin.ac.jp",
  "ub.edu.pl",
  "kiu.ru",
  "unyp.cz",
  "valdosta.edu",
  "unet.edu.ve",
];

export default function Login() {
  return (
    <>
      <div className="flex h-full w-screen">
        {/* Left Ribbon */}
        <div className="noSelect hidden h-full w-1/3 overflow-hidden bg-secondary p-4 font-semibold text-primary-500 md:block md:text-6xl lg:text-8xl ">
          {Array.from({ length: 24 }, (_, index) => (
            <div key={index}>
              WHATS
              <br />
              UNI
              <br />
            </div>
          ))}
        </div>
        {/* University Domains Top Ribbon */}
        <div className="noSelect text-md text-md absolute top-10 flex w-full flex-nowrap overflow-hidden tracking-widest text-white [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] md:right-0 md:w-2/3 short:hidden">
          <div className="flex animate-infinite-scroll items-center justify-center">
            {domainNames.map((domain, index) => (
              <span
                key={`first-${index}`}
                className="mx-3 rounded bg-secondary px-2 py-1 transition duration-300 ease-in-out hover:bg-primary-500 "
              >
                {domain}
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex animate-infinite-scroll items-center justify-center"
          >
            {domainNames.map((domain, index) => (
              <span
                key={`second-${index}`}
                className="mx-3 rounded bg-secondary px-1 py-1 transition duration-300 ease-in-out hover:bg-primary-500 "
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
        {/* Login */}
        <div className="mt-6 flex w-full flex-col items-center justify-center p-4 text-center">
          <h1 className="m-0 mb-2.5 bg-gradient-to-r from-primary-500 to-green-600 bg-clip-text text-4xl font-bold uppercase text-transparent md:hidden">
            Whatsuni
          </h1>
          <h1 className="text-3xl font-bold">Create an account</h1>
          <h2 className="mt-2 text-xl">
            Enter your university email to sign up
          </h2>

          <RegisterForm />

          <p className="my-3 text-sm text-gray-500">
            By clicking continue, you agree to our{" "}
            <a className="text-font" href="/terms-of-service">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-font" href="/privacy-policy">
              Privacy Policy
            </a>
          </p>
          <div className="flex items-center py-3">
            <div className="h-[1px] w-20 bg-gray-400"></div>
            <span className="px-3 text-gray-400">OR</span>
            <div className="h-[1px] w-20 bg-gray-400"></div>
          </div>

          <h2 className="mt-2 pb-3 text-xl">Already have an account?</h2>
          {/* Sign In Button */}
          <a href="/login">
            <button className="m-2 cursor-pointer rounded-lg border border-black px-10 py-2 text-lg font-semibold text-primary-700 shadow-md transition duration-300 hover:bg-primary-300">
              Sign in
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
