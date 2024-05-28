export const metadata = {
  title: "Terms of Service",
};

const TermsOfServicePage = () => {
  return (
    <>
      <div className="flex h-full w-screen">
        {/* Left Ribbon */}
        <div className="noSelect hidden w-1/3 overflow-hidden bg-secondary p-4 font-semibold text-primary-500 md:block md:text-6xl lg:text-8xl ">
          {Array.from({ length: 24 }, (_, index) => (
            <div key={index}>
              WHATS
              <br />
              UNI
              <br />
            </div>
          ))}
        </div>
        {/* TOS */}
        <div className="container mx-auto p-8 text-lg">
          <h1 className="mb-8 pb-4 text-center text-4xl font-bold text-primary-500 underline">
            Terms and Services
          </h1>

          <h2 className="mb-2 text-xl font-bold">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using our website, you agree to be bound by these
            Terms and Services.
          </p>

          <h2 className="mb-2 text-xl font-bold">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on our website for personal,
            non-commercial transitory viewing only.
          </p>

          <h2 className="mb-2 text-xl font-bold">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on our website are provided on an &apos;as is&apos;
            basis. We make no warranties, expressed or implied, and hereby
            disclaim and negate all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          <h2 className="mb-2 text-xl font-bold">4. Limitations</h2>
          <p className="mb-4">
            In no event shall we be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business
            interruption) arising out of the use or inability to use the
            materials on our website.
          </p>

          <h2 className="mb-2 text-xl font-bold">5. Governing Law</h2>
          <p className="mb-4">
            These Terms and Services shall be governed and construed in
            accordance with the laws of [Your Country], without regard to its
            conflict of law provisions.
          </p>

          <h2 className="mb-2 text-xl font-bold">6. Changes</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms and Services at any time.
          </p>

          <h2 className="mb-2 text-xl font-bold">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Services, please
            contact us.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;
