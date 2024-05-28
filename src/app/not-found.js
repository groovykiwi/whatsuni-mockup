const NotFound = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="my-6 text-9xl font-bold text-primary-500">404</h1>
        <h2 className="text-2xl ">Looks like there is nothing here...</h2>
        <h3 className="my-6 text-xl font-bold text-primary-500">
          <a href="/login">Go back home</a>
        </h3>
      </div>
    </>
  );
};

export default NotFound;
