const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center py-10 px-6">
        <h2 className="text-2xl bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text inline-block">
          Server is Down
        </h2>
        <p className="text-18 mt-3 mb-2">
          Why did the website go for free hosting?
          <br />
          Because it wanted to save up for a domain vacation! 😄
        </p>
        <p className="text-gray-500 mb-6">
          We apologize for the inconvenience.
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
