import { useState } from 'react';

function SearchBox({ serachValue, setSearchValue }) {
  const [format, setFormat] = useState('mp4');

  return (
    <div>
      <div className="relative mb-6">
        <i class="text-red-300 text-lg fas fa-link absolute left-2 top-1/2 transform -translate-y-1/2"></i>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={serachValue}
          className="w-full border-2 border-red-100 shadow-inner rounded-lg py-5 pl-10 pr-28"
          placeholder="Enter video URL here"
        ></input>
        <button
          className="p-3 bg-red-500 hover:bg-red-400 font-bold text-white rounded-lg absolute right-2 top-1/2 transform -translate-y-1/2 transition duration-200 shadow"
          onClick={() => console.log(format)}
        >
          <i class="fas fa-download mr-1"></i> Download
        </button>
      </div>
      <div className="text-sm text-gray-500 flex justify-start">
        <label
          className="container max-w-max mr-6 flex items-center"
          onClick={() => setFormat('mp4')}
        >
          Video and Audio
          <input type="radio" defaultChecked={true} name="format" />
          <span class="checkmark"></span>
        </label>

        <label className="container max-w-max" onClick={() => setFormat('mp3')}>
          <p className="text-md">Audio Only</p>
          <input type="radio" name="format" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

export default SearchBox;
