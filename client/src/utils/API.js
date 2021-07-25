const API = (() => {
  const getVideoDetails = async (videoId) => {
    const response = await fetch(`/api/videos/${videoId}`);
    const json = await response.json();

    return json;
  };

  return { getVideoDetails };
})();

export default API;
