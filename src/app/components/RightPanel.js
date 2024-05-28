const RightPanel = ({ popularList }) => {
  return (
    <>
      <div className="relative order-3 mt-10 hidden flex-col lg:flex">
        {/* <div className="mb-5 h-1/2 min-w-52">
          <h2 className="pb-2 text-xl font-bold text-primary-700">News</h2>
          <ol className="space-y-3 font-semibold list-disc list-inside">
            <li className="cursor-pointer">17-02 Registration</li>
            <li className="cursor-pointer">15-02 Exam Timetable</li>
          </ol>
        </div> */}
        <div>
          <h2 className="pb-3 text-xl font-bold text-primary-700 dark:text-primary-300">
            Popular
          </h2>
          <ol className="list-inside list-decimal space-y-3 font-semibold">
            {popularList &&
              popularList.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  #{item}
                </li>
              ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
