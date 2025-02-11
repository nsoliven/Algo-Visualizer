"use client";
import { useState } from "react";

export default function Sidebar() {
  // 'open' state controls whether the sidebar panel is visible.
  // When open, the panel is fully in view.
  // When closed, the panel slides completely off-screen.
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Algorithm Controls</h2>
          <ul className="space-y-3">
            <li className="p-2 bg-gray-700 rounded-md">Option 1</li>
            <li className="p-2 bg-gray-700 rounded-md">Option 2</li>
            <li className="p-2 bg-gray-700 rounded-md">Option 3</li>
          </ul>
        </div>
      </div>

      {/* Toggle Button (Tab) */}
      {/* 
          This button is always visible.
          - When the sidebar is closed, it sits at the right edge (right-0) as the only visible element.
          - When open, it shifts to the left edge of the panel (right-64).
      */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-1/2 transform -translate-y-1/2 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white p-2 rounded-l-md shadow-lg transition-all duration-300 ${
          open ? "right-64" : "right-0"
        }`}
      >
        {open ? (
          // X Icon: click to close the sidebar.
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Bars Icon: click to open the sidebar.
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </>
  );
}
