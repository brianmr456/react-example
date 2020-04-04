import React from 'react';

function Comment({ data, onDeleteClick }) {
  return (
    <div className="rounded border border-black p-2 my-1">
        <div className="flex flex-row justify-between relative">
            <h4 className="font-semibold text-xl">{data.name}</h4>
            <span className="absolute px-4 py-3" style={{top: '-10px', right: '-10px'}}>
                <svg onClick={() => onDeleteClick(data.id)}
                    className="fill-current rounded h-6 w-6 text-red-500 hover:bg-gray-200"
                    role="button" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
        </div>
        <p className="pt-2">
            <i className="italic">{data.email}</i>
        </p>
        <p className="pt-2">{data.body}</p>
    </div>
  );
}

export default Comment;
