function Loader() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="loader"></div>
      </div>
    </div>
  );
}

export default Loader;
