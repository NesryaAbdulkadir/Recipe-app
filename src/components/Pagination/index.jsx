import React from "react";

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="flex justify-center gap-2">
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          onClick={() => {
            paginate(pageNumber);
          }}
          className="px-4 py-2 rounded-md no-underline shadow-md hover:bg-gray-200"
        >
          <a href="!#" className="text-black no-underline ">
            {pageNumber}
          </a>
        </li>
      ))}
    </ul>
  );
}
