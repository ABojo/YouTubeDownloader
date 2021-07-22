function SearchBox() {
  return (
    <div>
      <div>
        <p className="mb-2 uppercase tracking-wide font-bold text-sm text-gray-400">
          Enter Video Url Here
        </p>
        <div className="relative">
          <input
            className="w-full border-2 border-red-100 shadow-inner rounded-lg p-4 pr-24"
            placeholder="Enter video URL here"
          ></input>
          <button className="p-3 bg-red-500 hover:bg-red-400 font-bold text-white rounded-lg absolute right-2 top-1/2 transform -translate-y-1/2 transition duration-200 shadow">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
