import Header from './components/Header';
import SearchBox from './components/SearchBox';
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

  return (
    <div className="max-w-2xl mx-auto w-11/12 py-12">
      <Header />
      <SearchBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setFormat={setFormat}
        getVideoDetails={getVideoDetails}
      />
    </div>
  );
}

export default App;
