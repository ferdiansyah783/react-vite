import React from "react";
import clsx from "clsx";

const CustomPagination = ({
  count,
  page,
  limit,
  setCurrentPage,
  setPrevPage,
  setNextPage,
}) => {
  const lastIndex = Math.ceil(count / limit);

  const startIndex = (page - 1) * limit + 1;

  const data = startIndex + parseInt(limit) - 1;

  const endIndex = data > count ? data - (data - count) : data;

  const paginate = (data, limit, current, adjacents) => {
    let _result = [];

    if (data && limit) {
      _result = range(lastIndex);

      if (current && adjacents) {
        if ((adjacents = Math.floor(adjacents / 2) * 2 + 1) >= 1) {
          _result = arraySlice(
            _result,
            Math.max(
              0,
              Math.min(
                _result.length + 1 - adjacents,
                current - Math.ceil(adjacents / 2)
              )
            ),
            adjacents
          );
        }
      }
    }

    return _result;
  };

  const range = (size, startAt = 1) => {
    return [...Array(size).keys()].map((i) => i + startAt);
  };

  const arraySlice = (array, start, length) => {
    let end = start + length;
    return array.slice(start, end);
  };

  const paginable = paginate(count, limit, page, 5);

  return (
    <nav className="w-full flex items-center">
      <p className="text-[#595959] text-sm absolute left-5">
        showing <span className="font-semibold">{startIndex}</span> to{" "}
        <span className="font-semibold">{endIndex}</span> of{" "}
        <span className="font-semibold">{count}</span> results
      </p>
      <ul className="inline-flex items-center absolute right-5">
        <li>
          <button
            className={clsx(
              "block px-3 lg:px-2 2xl:px-3 py-2 lg:py-1 2xl:py-2 ml-0 leading-tight text-gray-500 bg-gray-50 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700",
              page === 1 && "bg-gray-100"
            )}
            disabled={page === 1 && true}
            onClick={setPrevPage}
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {paginable.map((value, index) => (
          <li key={index}>
            <button
              className={clsx(
                "px-4 lg:px-3 2xl:px-4 py-2 lg:py-1 2xl:py-2 leading-tight hover:bg-gray-100 hover:text-gray-700",
                page === value ?
                  "active bg-indigo-500 bg-opacity-20 border border-indigo-500 text-indigo-500" : "text-gray-500 bg-white border border-gray-300"
              )}
              onClick={() => setCurrentPage(value)}
            >
              {value}
            </button>
          </li>
        ))}
        <li>
          <button
            className={clsx(
              "block px-3 lg:px-2 2xl:px-3 py-2 lg:py-1 2xl:py-2 leading-tight text-gray-500 bg-gray-50 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700",
              page === lastIndex && "bg-gray-100"
            )}
            disabled={page === lastIndex && true}
            onClick={setNextPage}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default CustomPagination;
