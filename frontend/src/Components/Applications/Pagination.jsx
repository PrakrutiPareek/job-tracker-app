function Pagination({currentPage, totalPages, onPageChange}) {
  if (totalPages <= 1) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex flex-wrap justify-center gap-2 bg-black/30 p-2 backdrop-blur sm:px-4 md:left-72 md:right-0">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md border text-sm font-medium ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({length: totalPages}, (_, index) => {
        const pageNumber = index + 1;

        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            className={`px-4 py-2 rounded-md border text-sm font-medium ${
              currentPage === pageNumber
                ? "bg-(--yellow) text-black"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md border text-sm font-medium ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
