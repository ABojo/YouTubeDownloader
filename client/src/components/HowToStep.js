function HowToStep(props) {
  const { number, heading, text, images, className } = props;
  return (
    <div className={`${className || 'mb-12'}`}>
      <h1 className="text-lg text-gray-900 font-bold mb-3">
        <span className="py-1 px-2 mr-3 text-sm bg-red-500 text-white rounded-lg text-center">
          {number}
        </span>
        {heading}
      </h1>
      <p className="text-gray-700 text-md mb-3">{text}</p>
      {images &&
        images.map((image) => (
          <img src={image} alt={text} className="rounded-lg shadow" />
        ))}
    </div>
  );
}

export default HowToStep;
