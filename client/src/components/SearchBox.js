import { useEffect } from 'react';

function SearchBox({ videoId, setVideoId, getVideoDetails }) {
  useEffect(() => {
    //Scrolls back to the top of the page on mount to guard against the component rendering and having the user be scrolled halfway down the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative mb-24">
      <i className="text-red-300 text-lg fas fa-link absolute left-2 top-1/2 transform -translate-y-1/2"></i>
      <input
        onChange={(e) => setVideoId(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') getVideoDetails();
        }}
        value={videoId}
        className="w-full border-2 border-red-100 shadow-inner rounded-lg py-5 pl-10 pr-36"
        placeholder="Video URL or video ID"
      ></input>
      <button
        onClick={getVideoDetails}
        className="p-3 bg-red-500 hover:bg-red-400 font-bold text-white rounded-lg absolute right-2 top-1/2 transform -translate-y-1/2 transition duration-200 shadow"
      >
        <i className="fas fa-search mr-1"></i> Search
      </button>
    </div>
  );
}

export default SearchBox;
