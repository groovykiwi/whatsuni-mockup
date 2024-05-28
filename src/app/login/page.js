export const metadata = {
  title: "Login",
};
import LoginForm from "../components/LoginForm";

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
      <div className="flex w-screen h-full">
        {/* Left Ribbon */}
        <div className="hidden w-1/3 h-full p-4 overflow-hidden font-semibold noSelect bg-secondary text-primary-500 md:block md:text-6xl lg:text-8xl ">
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
        <div className="noSelect text-md text-md absolute top-10 flex w-full flex-nowrap overflow-hidden tracking-widest text-white [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] md:right-16 md:w-2/3 short:hidden">
          <div className="flex items-center justify-center animate-infinite-scroll">
            {domainNames.map((domain, index) => (
              <span
                key={`1-${index}`}
                className="px-2 py-1 mx-3 transition duration-300 ease-in-out rounded whitespace-nowrap bg-secondary hover:bg-primary-500 "
              >
                {domain}
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex items-center justify-center animate-infinite-scroll"
          >
            {domainNames.map((domain, index) => (
              <span
                key={`2-${index}`}
                className="px-1 py-1 mx-3 transition duration-300 ease-in-out rounded bg-secondary hover:bg-primary-500 "
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
        {/* Login */}
        <div className="flex flex-col items-center justify-center w-full p-4 mt-6 text-center">
          <h1 className="m-0 mb-2.5 bg-gradient-to-r from-primary-500 to-green-600 bg-clip-text text-4xl font-bold uppercase text-transparent md:hidden">
            Whatsuni
          </h1>
          <h1 className="text-3xl font-bold">Sign in to WhatsUni</h1>

          <LoginForm />

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

          {/* Sign In Button */}
          <a href="/register">
            <button className="px-10 py-2 m-2 text-lg font-semibold transition duration-300 border border-black rounded-lg shadow-md cursor-pointer text-primary-700 hover:bg-primary-300">
              Create an account
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
