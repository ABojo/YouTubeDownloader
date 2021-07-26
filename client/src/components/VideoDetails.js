function VideoDetails({ details, clearVideoDetails }) {
  const downloadPath = `/api/videos/${details.videoId}`;

  return (
    <div className="w-full rounded-lg bg-gray-100 p-5 shadow mb-24">
      <h1 className="mb-3 tracking-widest uppercase text-gray-500 text-sm">
        Video Details
      </h1>
      <iframe
        title={details.title}
        className="w-full h-96 mb-3"
        src={details.embedUrl}
      ></iframe>
      <div className="mb-12">
        <h1 className="text-lg font-bold text-gray-900 mb-3">
          {details.title}
        </h1>
        <h2 className="text-md text-gray-500 mb-3">
          <i className="far fa-user mr-1"></i>
          {details.author}
        </h2>
        <div className="text-sm text-gray-500 flex items-center">
          <p className="mr-3">
            <i className="fas fa-eye mr-1 text-yellow-500"></i>
            {details.viewCount}
          </p>
          <p className="mr-3">
            <i className="fas fa-thumbs-up mr-1 text-green-500"></i>
            {details.likes}
          </p>
          <p className="mr-3">
            <i className="fas fa-thumbs-down mr-1 text-red-500"></i>
            {details.dislikes}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <h1 className="mb-3 tracking-widest uppercase text-gray-500 text-sm">
          Save this video
        </h1>
        <a
          href={`${downloadPath}/mp4`}
          className="w-full bg-red-500 rounded-lg p-3 text-white font-bold text-lg flex justify-center items-center mb-3 hover:bg-red-400 transition duration-200 mr-6"
          download
        >
          <i className="fas fa-video mr-3"></i> Download Video
        </a>
        <a
          href={`${downloadPath}/mp3`}
          className="w-full bg-red-500 rounded-lg p-3 text-white font-bold text-lg flex justify-center items-center mb-3 hover:bg-red-400 transition duration-200"
          download
        >
          <i className="fas fa-music mr-3"></i> Download Audio
        </a>
      </div>
      <div className="text-center mb-6 text-gray-500 uppercase text-sm flex justify-between items-center">
        <div className="border-b border-gray-500 w-full"></div>
        <p className="mx-3">Or</p>
        <div className="border-b border-gray-500 w-full"></div>
      </div>
      <button
        onClick={clearVideoDetails}
        className="w-full border-gray-500 border rounded-lg p-3 text-gray-500 text-md hover:bg-gray-200 transition duration-200"
      >
        Go Back
      </button>
    </div>
  );
}

export default VideoDetails;
