const ErrorMessage = ({message}) => {
  if (!message) return null;

  return (
    <div
      className="font-bold  text-xl text-red-400 rounded-lg p-4 mb-4 text-center"
      aria-live="polite"
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
