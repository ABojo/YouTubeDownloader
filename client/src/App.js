import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [videoDetails, setVideoDetails] = useState(null);

  return (
    <div className="max-w-2xl mx-auto w-11/12 py-12">
      <Header />
      <SearchBox />
    </div>
  );
}

export default App;
