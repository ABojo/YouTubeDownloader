import stepOne from '../images/Step1.PNG';
import stepTwoA from '../images/Step2A.png';
import stepTwoB from '../images/Step2B.png';
import stepThree from '../images/Step3.PNG';
import stepFour from '../images/Step4.PNG';

function HowTo() {
  return (
    <div className="flex flex-col bg-gray-100 p-5 rounded-lg mb-24">
      <h1 className="mb-12 text-gray-900 text-3xl text-center font-bold">
        How to use YouTube Downloader
      </h1>
      <div className="self-start mb-12">
        <h1 className="text-lg text-gray-900 mb-3">
          <span className="py-1 px-2 mr-3 text-sm bg-red-500 text-white rounded-lg text-center">
            1
          </span>
          Open the video on YouTube
        </h1>
        <p className="text-gray-500 text-md mb-3">
          Go to YouTube.com, search for the video, and click on it
        </p>
        <img src={stepOne} alt="Step 1" className="rounded-lg shadow" />
      </div>
      <div className="self-end mb-12">
        <h1 className="text-lg text-gray-900 mb-3">
          <span className="py-1 px-2 mr-3 text-md bg-red-500 text-white rounded-lg text-center">
            2
          </span>
          Copy the URL or Video ID from the address bar
        </h1>
        <p className="text-gray-500 mb-3">
          Look up at the address bar and either copy the entire URL or just the
          unique video ID at the end
        </p>
        <img src={stepTwoA} alt="Step 2a" className="rounded-lg shadow mb-3" />
        <img src={stepTwoB} alt="Step 2b" className="rounded-lg shadow" />
      </div>
      <div className="self-start mb-12">
        <h1 className="text-lg text-gray-900 mb-3">
          <span className="py-1 px-2 mr-3 text-md bg-red-500 text-white rounded-lg text-center">
            3
          </span>
          Paste the URL or Video ID into the search bar and hit search
        </h1>
        <p className="text-gray-500 mb-3">
          Copy the URL or Video ID from YouTube and paste it into the search bar
          above then hit search.
        </p>
        <img src={stepThree} alt="Step 3" className="rounded-lg shadow " />
      </div>
      <div className="self-end">
        <h1 className="text-lg text-gray-900 mb-3">
          <span className="py-1 px-2 mr-3 text-md bg-red-500 text-white rounded-lg text-center">
            4
          </span>
          Choose whether you want to download the video or the audio
        </h1>
        <p className="text-gray-500 mb-3">
          You can download the video and audio of the selected video or just the
          audio
        </p>
        <img src={stepFour} alt="Step 4" className="rounded-lg shadow" />
      </div>
    </div>
  );
}

export default HowTo;
