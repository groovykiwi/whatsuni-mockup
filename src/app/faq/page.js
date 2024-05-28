const FAQ = () => {
    return (
        <>
            <div className="flex w-screen h-full">
                {/* Left Ribbon */}
                <div className="hidden w-1/3 p-4 overflow-hidden font-semibold noSelect bg-secondary text-primary-500 md:block md:text-6xl lg:text-8xl ">
                    {Array.from({ length: 24 }, (_, index) => (
                        <div key={index}>
                            WHATS
                            <br />
                            UNI
                            <br />
                        </div>
                    ))}
                </div>
                {/* FAQ */}
                <div className="container flex flex-col justify-center p-8 text-lg">
                    <h1 className="pb-4 mb-8 text-4xl font-bold text-center underline text-primary-500">
                        Frequently Asked Questions
                    </h1>

                    <div className="mb-8">
                        <h2 className="mb-2 text-3xl font-semibold">How do I sign up for an account?</h2>
                        <p className="w-3/4 mb-4">
                            To sign up for an account, go to the registration page and follow the instructions provided. You will need a valid university email address to create an account.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="mb-2 text-3xl font-semibold">How can I reset my password?</h2>
                        <p className="w-3/4 mb-4">
                            If you need to reset your password, you can do so by visiting the password reset page and following the prompts. Make sure to use the email address associated with your account.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="mb-2 text-3xl font-semibold">How do I make a post?</h2>
                        <p className="w-3/4 mb-4">
                            To make a post, follow these steps:
                            <ol className="pl-4 list-decimal">
                                <li>Log in to your account.</li>
                                <li>Navigate to the &quot;Home&quot; section of the platform.</li>
                                <li>Click on the &quot;Post&quot; button.</li>
                                <li>Enter your post content, including text, images, or links.</li>
                                <li>Once you&apos;re satisfied with your post, click the &quot;Submit&quot; button to publish it.</li>
                            </ol>
                        </p>
                    </div>

                    {/* Add more FAQ items as needed */}
                </div>
            </div>
        </>
    );
};

export default FAQ;