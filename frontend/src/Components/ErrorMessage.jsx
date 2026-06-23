const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="font-bold  text-xl text-red-400 rounded-lg p-8 mb-8 text-center bg-(--navy-blue)">
      {message}
    </div>
  );
};


export default ErrorMessage;