import { useEffect } from 'react';

function SearchBox({ videoId, setVideoId, getVideoDetails }) {
  useEffect(() => {
    //Scrolls back to the top of the page on mount to guard against the component rendering and having the user be scrolled halfway down the page
    window.scrollTo(0, 0);
  }, []);

  const currentColor = videoId ? '-red-500' : '-red-100';
  const transClasses = 'transition duration-300';

  return (
    <div className="relative mb-24 ">
      <i
        className={`text${currentColor} text-lg fas fa-link absolute left-2 top-1/2 transform -translate-y-1/2 ${transClasses}`}
      ></i>
      <input
        onChange={(e) => setVideoId(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') getVideoDetails();
        }}
        value={videoId}
        className={`w-full border-2  shadow-inner rounded-lg py-5 pl-10 pr-36 outline-none border${currentColor} ${transClasses}`}
        placeholder="Enter a YouTube video URL or ID here"
      ></input>
      <button
        disabled={!videoId}
        onClick={getVideoDetails}
        className={`p-3 bg${currentColor} ${
          videoId ? 'hover:bg-red-400 shadow' : 'cursor-default'
        } font-bold text-white rounded-lg absolute right-2 top-1/2 transform -translate-y-1/2 ${transClasses}`}
      >
        <i className="fas fa-search mr-1"></i> Search
      </button>
    </div>
  );
}

export default SearchBox;
