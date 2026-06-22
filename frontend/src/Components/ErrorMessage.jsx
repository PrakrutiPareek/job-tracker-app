const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-lg p-4 mb-4">
      {message}
    </div>
  );
};


export default ErrorMessage;