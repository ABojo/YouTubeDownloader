function SearchBox({ videoId, setVideoId, getVideoDetails }) {
  return (
    <div className="relative mb-6">
      <i className="text-red-300 text-lg fas fa-link absolute left-2 top-1/2 transform -translate-y-1/2"></i>
      <input
        onChange={(e) => setVideoId(e.target.value)}
        value={videoId}
        className="w-full border-2 border-red-100 shadow-inner rounded-lg py-5 pl-10 pr-36"
        placeholder="Enter video URL or ID here"
      ></input>
      <button
        onClick={getVideoDetails}
        className="p-3 bg-red-500 hover:bg-red-400 font-bold text-white rounded-lg absolute right-2 top-1/2 transform -translate-y-1/2 transition duration-200 shadow"
      >
        <i class="fas fa-search mr-1"></i> Search
      </button>
    </div>
  );
}

export default SearchBox;
