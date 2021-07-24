function ErrorMessage({ message }) {
  return (
    <div className="w-full bg-yellow-100 text-yellow-900 font-bold p-5 text-md rounded-lg mb-6">
      <i class="fas fa-exclamation-triangle mr-1"></i> {message}
    </div>
  );
}

export default ErrorMessage;
