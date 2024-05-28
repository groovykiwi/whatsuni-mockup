export const metadata = {
  title: "Privacy Policy",
};

const PrivacyPage = () => {
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
        {/* Privacy Policy */}
        <div className="container mx-auto p-8 text-lg">
          <h1 className="mb-8 pb-4 text-center text-4xl font-bold text-primary-500 underline">
            Privacy Policy
          </h1>
          <p className="mb-4">
            This Privacy Policy describes how we collect, use, and disclose
            information when you use our website.
          </p>

          <h2 className="mb-2 text-xl font-bold">Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you
            fill out a form or contact us.
          </p>

          <h2 className="mb-2 text-xl font-bold">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            We may use the information we collect from you to respond to your
            inquiries, improve our website, and personalize your experience.
          </p>

          <h2 className="mb-2 text-xl font-bold">Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent.
          </p>

          <h2 className="mb-2 text-xl font-bold">Security</h2>
          <p className="mb-4">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure.
          </p>

          <h2 className="mb-2 text-xl font-bold">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="mb-2 text-xl font-bold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
