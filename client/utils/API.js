const API = () => {
  const getVideoDetails = async (url, fileExtension) => {
    const response = await fetch('/api/convert', { url, fileExtension });
    const json = await response.json();

    return json;
  };
  return { getVideoDetails };
};

export default API;
