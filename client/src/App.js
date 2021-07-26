import Header from './components/Header';
import SearchBox from './components/SearchBox';
import VideoDetails from './components/VideoDetails';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import HowTo from './components/HowTo';
import { useState, useEffect, Fragment } from 'react';
import API from './utils/API';

function App() {
  const [videoId, setVideoId] = useState('');
  const [videoDetails, setVideoDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getVideoDetails = async () => {
    //If the user hasnt entered a value into the input then display an error message
    if (!videoId)
      return setErrorMessage('Sorry, you must enter a valid URL/ID!');

    //Clear error message everytime the user makes a request
    setErrorMessage(null);

    //Start loading
    setIsLoading(true);

    const json = await API.getVideoDetails(encodeURIComponent(videoId));

    //Stop loading
    setIsLoading(false);

    if (json.status === 'error')
      return setErrorMessage(
        "Sorry, we couldn't find that video! Please make sure you entered the right URL/ID"
      );

    //If there was no error save the video details in state
    setVideoDetails(json.data);
  };

  const clearVideoDetails = () => {
    setVideoDetails(null);
  };

  return (
    <div className="max-w-2xl mx-auto w-11/12 py-12">
      {isLoading && <Loader />}
      <Header />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {videoDetails ? (
        <VideoDetails
          details={videoDetails}
          clearVideoDetails={clearVideoDetails}
        />
      ) : (
        <Fragment>
          <SearchBox
            videoId={videoId}
            setVideoId={setVideoId}
            getVideoDetails={getVideoDetails}
          />
          <HowTo />
        </Fragment>
      )}
    </div>
  );
}

export default App;
