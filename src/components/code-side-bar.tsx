import React from "react";

type SidebarProps = {
  opt1Action: () => void;
  opt2Action: () => void;
  opt3Action: () => void;
};

/**
 * Sidebar main function will simply execute 3 different functions
 * @param opt1Action: the stepping button, step through the algorithm at one step
 * @param opt2Action: N/A not implemented
 * @param opt3Action: N/A not implemented
 * @returns 
 */
export default function Sidebar({ opt1Action, opt2Action, opt3Action }: SidebarProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Algorithm Controls</h2>
      <button 
        className="p-2 bg-gray-700 rounded-md w-full text-left hover:bg-gray-600"
        onClick={opt1Action}
      >
        Step
      </button>
      <button 
        className="p-2 bg-gray-700 rounded-md w-full text-left hover:bg-gray-600 mt-2"
        onClick={opt2Action}
      >
        N/A
      </button>
      <button 
        className="p-2 bg-gray-700 rounded-md w-full text-left hover:bg-gray-600 mt-2"
        onClick={opt3Action}
      >
        N/A
      </button>
    </div>
  );
}
