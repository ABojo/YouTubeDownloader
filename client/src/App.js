import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [videoDetails, setVideoDetails] = useState(null);
  const [format, setFormat] = useState('mp4');

  const getVideoDetails = () => {};

  return (
    <div className="max-w-2xl mx-auto w-11/12 py-12">
      <Header />
      <SearchBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setFormat={setFormat}
      />
    </div>
  );
}

export default App;
