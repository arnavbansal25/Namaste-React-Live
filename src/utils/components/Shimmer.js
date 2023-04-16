const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-52 h-52 m-2 p-2 bg-gray-300"></div>
        ))}
    </div>
  );
};

export default Shimmer;
