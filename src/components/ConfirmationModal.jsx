const ConfirmationModal = ({ text, onClose, onConfirm, error }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md drop-shadow-md">
        <p className="text-md mb-4">{text}</p>
        <div className="flex justify-center gap-5">
          <button
            className="group relative w-full h-10 flex items-center justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-5 w-32"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`group relative w-full h-10 flex items-center justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 mt-5 w-32 ${
              error
                ? 'focus:ring-red-500 bg-red-500 hover:bg-red-700'
                : 'focus:ring-green-500 bg-green-500 hover:bg-green-700'
            }`}
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
