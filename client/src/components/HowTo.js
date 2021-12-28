import stepTwoA from '../images/Step2A.png';
import stepTwoB from '../images/Step2B.png';

const stepHeadingStyling = 'text-lg text-gray-900 font-bold mb-3';

function HowTo() {
  return (
    <div className="flex flex-col bg-gray-100 p-5 rounded-lg mb-24">
      <h1 className="mb-12 text-gray-500 text-4xl text-center font-thin">
        How do I download videos?
      </h1>
      <div className="self-start mb-12">
        <h1 className={stepHeadingStyling}>
          <span className="py-1 px-2 mr-3 text-sm bg-red-500 text-white rounded-lg text-center">
            1
          </span>
          Open the video that you would like to download
        </h1>
        <p className="text-gray-500 text-md mb-3">
          Go to YouTube.com, search for the video, and click on the video to
          open it.
        </p>
      </div>
      <div className="self-end mb-12">
        <h1 className={stepHeadingStyling}>
          <span className="py-1 px-2 mr-3 text-md bg-red-500 text-white rounded-lg text-center">
            2
          </span>
          Copy the URL or Video ID from the address bar
        </h1>
        <p className="text-gray-500 mb-3">
          Now that you have the video open look up at the address bar and either
          copy the entire URL or just the unique video ID at the end after the
          "?v=".
        </p>
        <img src={stepTwoA} alt="Step 2a" className="rounded-lg shadow mb-3" />
        <img src={stepTwoB} alt="Step 2b" className="rounded-lg shadow" />
      </div>
      <div className="self-start mb-12">
        <h1 className={stepHeadingStyling}>
          <span className="py-1 px-2 mr-3 text-md bg-red-500 text-white rounded-lg text-center">
            3
          </span>
          Paste the URL or Video ID into the search bar and hit search
        </h1>
        <p className="text-gray-500 mb-3">
          Paste the URL or video ID into the search bar at the top of the page
          then hit search.
        </p>
      </div>
      <div className="self-start">
        <h1 className={stepHeadingStyling}>
          <span className="py-1 px-2 mr-3 text-md bg-red-500 text-white rounded-lg text-center">
            4
          </span>
          Save the video file or just the audio to your computer!
        </h1>
        <p className="text-gray-500 mb-3">
          After you press search you will be given the option to download the
          video or just the audio.
        </p>
      </div>
    </div>
  );
}

export default HowTo;
