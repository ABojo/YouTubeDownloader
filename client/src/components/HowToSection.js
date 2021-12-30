import stepTwoImageA from '../images/Step2A.png';
import stepTwoImageB from '../images/Step2B.png';
import HowToStep from './HowToStep';

function HowToSection() {
  return (
    <div className="bg-gray-100 p-5 rounded-lg mb-24">
      <h1 className="mb-12 text-gray-500 text-4xl text-center font-thin">
        How do I download videos?
      </h1>
      <HowToStep
        number="1"
        heading="Open the video that you would like to download"
        text=" Go to YouTube.com, search for the video, and click on the video to
          open it."
      />
      <HowToStep
        number="2"
        heading="Copy the URL or Video ID from the address bar"
        text='Now that you have the video open look up at the address bar and either
        copy the entire URL or just the unique video ID at the end after the
        "?v=".'
        images={[stepTwoImageA, stepTwoImageB]}
      />
      <HowToStep
        number="3"
        heading="Paste the URL or Video ID into the search bar and hit search"
        text="Paste the URL or video ID into the search bar at the top of the page
        then hit search."
      />
      <HowToStep
        number="4"
        heading="Save the video file or just the audio to your computer!"
        text="After you press search you will be given the option to download the
        video or just the audio."
        className="mb-0"
      />
    </div>
  );
}

export default HowToSection;
