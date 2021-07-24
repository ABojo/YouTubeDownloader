import Header from './components/Header';
import SearchBox from './components/SearchBox';
import VideoDetails from './components/VideoDetails';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { useState } from 'react';
import API from './utils/API';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [videoDetails, setVideoDetails] = useState(null);
  const [format, setFormat] = useState('mp4');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const loadCallback = (cb) => {
    return async () => {
      setIsLoading(true);
      await cb();
      setIsLoading(false);
    };
  };

  const getVideoDetails = loadCallback(async () => {
    const json = await API.getVideoDetails(searchValue, format);

    if (json.status === 'error')
      return setErrorMessage(
        "Sorry, we couldn't find that video! Please make sure you entered the right URL."
      );

    setVideoDetails(json.data);
  });

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
          format={format}
          clearVideoDetails={clearVideoDetails}
        />
      ) : (
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setFormat={setFormat}
          getVideoDetails={getVideoDetails}
        />
      )}
    </div>
  );
}

export default App;
