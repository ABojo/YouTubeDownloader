const API = (() => {
  const getVideoDetails = async (url, fileExtension) => {
    const response = await fetch('/api/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, fileExtension }),
    });

    const json = await response.json();

    return json;
  };
  return { getVideoDetails };
})();

export default API;
